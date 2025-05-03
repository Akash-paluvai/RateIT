import React, { useState } from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { restaurant } from '../../data/mockData';

const SettingsPage: React.FC = () => {
  const [restaurantData, setRestaurantData] = useState({
    name: restaurant.name,
    location: restaurant.location,
    cuisine: restaurant.cuisine.join(', '),
    email: 'info@urbanspicekitchen.com',
    phone: '+1 (555) 123-4567',
    notifyNewReviews: true,
    notifyNegativeReviews: true,
    notifyCompetitorChanges: false,
    notifyWeeklySummary: true,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setRestaurantData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Settings saved successfully!');
  };
  
  return (
    <div>
      <DashboardHeader 
        title="Settings" 
        subtitle="Manage your account and notification preferences"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Restaurant Profile */}
          <Card className="mb-6">
            <h3 className="text-lg font-semibold text-surface-800 mb-4">Restaurant Profile</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-surface-700 mb-1">
                    Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={restaurantData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-surface-700 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={restaurantData.location}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="cuisine" className="block text-sm font-medium text-surface-700 mb-1">
                    Cuisine Types (comma separated)
                  </label>
                  <input
                    type="text"
                    id="cuisine"
                    name="cuisine"
                    value={restaurantData.cuisine}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-surface-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={restaurantData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-surface-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={restaurantData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit">Save Profile</Button>
                </div>
              </div>
            </form>
          </Card>
          
          {/* Notification Settings */}
          <Card>
            <h3 className="text-lg font-semibold text-surface-800 mb-4">Notification Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-surface-700">New Review Alerts</h4>
                  <p className="text-sm text-surface-500">Get notified when your restaurant receives a new review</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="notifyNewReviews"
                    checked={restaurantData.notifyNewReviews}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-surface-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-surface-700">Negative Review Alerts</h4>
                  <p className="text-sm text-surface-500">Get immediately notified of any negative reviews</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="notifyNegativeReviews"
                    checked={restaurantData.notifyNegativeReviews}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-surface-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-surface-700">Competitor Change Alerts</h4>
                  <p className="text-sm text-surface-500">Get notified when competitors have significant rating changes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="notifyCompetitorChanges"
                    checked={restaurantData.notifyCompetitorChanges}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-surface-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-surface-700">Weekly Summary Report</h4>
                  <p className="text-sm text-surface-500">Receive a weekly email with analytics and insights</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    name="notifyWeeklySummary"
                    checked={restaurantData.notifyWeeklySummary}
                    onChange={handleChange}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-surface-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-surface-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                </label>
              </div>
              
              <div className="pt-4">
                <Button variant="primary">Save Preferences</Button>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          {/* Account Card */}
          <Card className="mb-6">
            <h3 className="text-lg font-semibold text-surface-800 mb-4">Account</h3>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 text-xl font-semibold">
                {restaurantData.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-surface-800">{restaurantData.name}</p>
                <p className="text-sm text-surface-500">Restaurant Owner</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-lg border border-surface-200 hover:bg-surface-50 transition-colors">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg border border-surface-200 hover:bg-surface-50 transition-colors">
                Two-Factor Authentication
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg border border-surface-200 hover:bg-surface-50 transition-colors">
                Connected Accounts
              </button>
            </div>
          </Card>
          
          {/* Subscription Card */}
          <Card>
            <h3 className="text-lg font-semibold text-surface-800 mb-4">Subscription</h3>
            
            <div className="bg-primary-50 text-primary-800 rounded-lg p-4 mb-4">
              <p className="font-medium">Premium Plan</p>
              <p className="text-sm">Renews on October 15, 2025</p>
            </div>
            
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-2 rounded-lg border border-surface-200 hover:bg-surface-50 transition-colors">
                Change Plan
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg border border-surface-200 hover:bg-surface-50 transition-colors">
                Billing History
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg border border-red-100 text-red-600 hover:bg-red-50 transition-colors">
                Cancel Subscription
              </button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;