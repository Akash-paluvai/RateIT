import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus, ExternalLink, Loader2 } from 'lucide-react';
import { Competitor } from '../../types';

interface CompetitorTableProps {
  apiKey?: string;
  radius?: number; // in meters
  maxResults?: number;
}

const CompetitorTable: React.FC<CompetitorTableProps> = ({ 
  apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
  radius = 5000, 
  maxResults = 10 
}) => {
  const [competitors, setCompetitors] = useState<Competitor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  // Get trend icon
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp size={16} className="text-green-500" />;
      case 'down':
        return <TrendingDown size={16} className="text-red-500" />;
      default:
        return <Minus size={16} className="text-surface-500" />;
    }
  };

  // Fetch user's location
  const getUserLocation = async () => {
    try {
      // Option 1: Use browser geolocation
      if (navigator.geolocation) {
        return new Promise<{ lat: number, lng: number }>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              resolve({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });
            },
            (error) => {
              reject(error);
            }
          );
        });
      } 
      
      // Option 2: Fallback to IP-based location
      const response = await fetch('https://ipinfo.io/json');
      const data = await response.json();
      const [lat, lng] = data.loc.split(',').map(Number);
      return { lat, lng };
    } catch (error) {
      console.error('Error getting location:', error);
      throw error;
    }
  };

  // Convert Google Places result to our Competitor type
  const mapPlaceToCompetitor = (place: any, index: number): Competitor => {
    // Generate a simple trend based on price level or random if not available
    const trendOptions = ['up', 'down', 'stable'];
    const trend = place.price_level 
      ? (place.price_level > 2 ? 'up' : 'down') 
      : trendOptions[Math.floor(Math.random() * trendOptions.length)];
    
    // Extract categories from types
    const categories = place.types
      ?.filter((type: string) => !['establishment', 'point_of_interest', 'food'].includes(type))
      .map((type: string) => type.replace('_', ' '))
      .slice(0, 3) || ['restaurant'];

    // Calculate distance in km (approximate using lat/lng if geometry is available)
    let distance = (index + 1) / 2; // Fallback
    if (place.geometry && location) {
      const [userLat, userLng] = location.split(',').map(Number);
      const placeLat = place.geometry.location.lat;
      const placeLng = place.geometry.location.lng;
      
      // Haversine formula (simplified)
      const R = 6371; // Earth radius in km
      const dLat = (placeLat - userLat) * Math.PI / 180;
      const dLng = (placeLng - userLng) * Math.PI / 180;
      const a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(userLat * Math.PI / 180) * Math.cos(placeLat * Math.PI / 180) * 
        Math.sin(dLng/2) * Math.sin(dLng/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      distance = +(R * c).toFixed(1);
    }

    return {
      id: place.place_id || `place-${index}`,
      name: place.name,
      distance: distance,
      avgRating: place.rating || 0,
      trend: trend,
      category: categories,
      placeId: place.place_id,
      vicinity: place.vicinity || ''
    };
  };

  // Simple proxy function for CORS issues
  const fetchFromProxy = async (url: string) => {
    // You can use a CORS proxy like cors-anywhere or set up your own
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';
    return fetch(corsProxy + url);
  };

  // Fetch nearby restaurants using Google Maps API directly
  const fetchNearbyCompetitors = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Get user location
      const userLocation = await getUserLocation();
      const locString = `${userLocation.lat},${userLocation.lng}`;
      setLocation(locString);
      
      // For development/testing, you can use sample data
      if (!apiKey) {
        console.warn('API key not found, using sample data');
        setCompetitors(getSampleCompetitors());
        setLoading(false);
        return;
      }
      
      // Create the Places API URL
      const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
      url.searchParams.append('location', locString);
      url.searchParams.append('radius', radius.toString());
      url.searchParams.append('type', 'restaurant');
      url.searchParams.append('key', apiKey);
      
      // Use a CORS proxy or implement the API call server-side
      // WARNING: Direct API calls from the frontend are not recommended for production!
      let response;
      try {
        // First attempt direct call (will likely fail due to CORS)
        response = await fetch(url.toString());
      } catch (e) {
        // Then try through proxy
        console.warn('Direct API call failed, trying proxy');
        response = await fetchFromProxy(url.toString());
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch nearby places');
      }
      
      const data = await response.json();
      
      if (data.status !== 'OK') {
        throw new Error(data.error_message || 'API returned an error');
      }
      
      // Transform and sort by rating
      const places = data.results || [];
      const mappedCompetitors = places
        .map(mapPlaceToCompetitor)
        .sort((a, b) => b.avgRating - a.avgRating)
        .slice(0, maxResults);
      
      setCompetitors(mappedCompetitors);
    } catch (err) {
      console.error('Error fetching competitors:', err);
      setError('Failed to load competitor data. Please try again later.');
      // For demo purposes, load some sample data if API fails
      setCompetitors(getSampleCompetitors());
    } finally {
      setLoading(false);
    }
  };

  // Sample data for fallback
  const getSampleCompetitors = (): Competitor[] => {
    return [
      {
        id: '1',
        name: 'Burger Haven',
        distance: 0.8,
        avgRating: 4.7,
        trend: 'up',
        category: ['burger', 'fast food'],
        placeId: 'sample1',
        vicinity: '123 Main St'
      },
      {
        id: '2',
        name: 'Pizza Palace',
        distance: 1.2,
        avgRating: 4.5,
        trend: 'stable',
        category: ['pizza', 'italian'],
        placeId: 'sample2',
        vicinity: '456 Oak Ave'
      },
      {
        id: '3',
        name: 'Sushi Spot',
        distance: 1.5,
        avgRating: 4.8,
        trend: 'up',
        category: ['japanese', 'sushi'],
        placeId: 'sample3',
        vicinity: '789 Cherry Ln'
      },
      {
        id: '4',
        name: 'Taco Time',
        distance: 0.5,
        avgRating: 4.2,
        trend: 'down',
        category: ['mexican', 'tacos'],
        placeId: 'sample4',
        vicinity: '321 Pine St'
      },
      {
        id: '5',
        name: 'Noodle House',
        distance: 1.8,
        avgRating: 4.6,
        trend: 'up',
        category: ['asian', 'noodles'],
        placeId: 'sample5',
        vicinity: '654 Maple Dr'
      }
    ];
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchNearbyCompetitors();
  }, [apiKey, radius]);

  const handleViewDetails = (placeId: string) => {
    window.open(`https://www.google.com/maps/place/?q=place_id:${placeId}`, '_blank');
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-medium overflow-hidden">
      <div className="p-4 border-b border-surface-200 flex justify-between items-center">
        <h3 className="text-lg font-semibold text-surface-800">Nearby Competitors</h3>
        {!loading && (
          <button 
            onClick={() => fetchNearbyCompetitors()}
            className="text-sm px-3 py-1 bg-surface-100 hover:bg-surface-200 rounded-md text-surface-700 transition-colors"
          >
            Refresh
          </button>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center p-8">
          <Loader2 className="animate-spin mr-2" size={20} />
          <span>Loading competitor data...</span>
        </div>
      ) : error ? (
        <div className="p-8 text-center text-red-500">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-50">
                <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">Restaurant</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">Distance</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">Avg. Rating</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">Trend</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">Category</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-surface-500">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-100">
              {competitors.map((competitor) => (
                <tr key={competitor.id} className="hover:bg-surface-50">
                  <td className="px-4 py-3 text-sm font-medium text-surface-700">
                    {competitor.name}
                    <div className="text-xs text-surface-500">{competitor.vicinity}</div>
                  </td>
                  <td className="px-4 py-3 text-sm text-surface-600">{competitor.distance} km</td>
                  <td className="px-4 py-3 text-sm text-surface-600">{competitor.avgRating.toFixed(1)}</td>
                  <td className="px-4 py-3 text-sm text-surface-600">
                    <div className="flex items-center space-x-1">
                      {getTrendIcon(competitor.trend)}
                      <span className="capitalize">{competitor.trend}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-surface-600">
                    <div className="flex flex-wrap gap-1">
                      {competitor.category.map((cat, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-surface-100 text-surface-700 rounded-full text-xs"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => handleViewDetails(competitor.placeId)}
                      className="text-primary-500 hover:text-primary-700 transition-colors flex items-center"
                      title="View competitor details"
                    >
                      <span className="mr-1">View</span>
                      <ExternalLink size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CompetitorTable;