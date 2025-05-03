// File: pages/api/nearby-places.ts (for Next.js)
import type { NextApiRequest, NextApiResponse } from 'next';

type PlacesResponse = {
  results: any[];
  status: string;
  error_message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<PlacesResponse | { error: string }>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { location, radius, type, key } = req.query;

    // Validate required parameters
    if (!location || !radius || !type) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Use environment variable for API key if not provided
    const apiKey = key || process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Construct Google Places API URL
    const url = new URL('https://maps.googleapis.com/maps/api/place/nearbysearch/json');
    url.searchParams.append('location', String(location));
    url.searchParams.append('radius', String(radius));
    url.searchParams.append('type', String(type));
    url.searchParams.append('key', String(apiKey));

    // Make the request to Google Places API
    const response = await fetch(url.toString());
    const data: PlacesResponse = await response.json();

    // Return the response from Google Places API
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching nearby places:', error);
    return res.status(500).json({ error: 'Failed to fetch nearby places' });
  }
}