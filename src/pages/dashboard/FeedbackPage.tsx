import React from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import Card from '../../components/ui/Card';
import ReviewsTable from '../../components/dashboard/ReviewsTable';
import { reviews } from '../../data/mockData';

const FeedbackPage: React.FC = () => {
  return (
    <div>
      <DashboardHeader 
        title="Feedback & Ratings" 
        subtitle="Monitor and analyze customer reviews across platforms"
      />
      
      {/* Filter Card */}
      <Card className="mb-6 p-4 flex flex-wrap gap-4">
        {/* Source Filter */}
        <div>
          <label htmlFor="source" className="block text-sm font-medium text-surface-700 mb-1">
            Source
          </label>
          <select
            id="source"
            className="rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[150px]"
          >
            <option value="">All Sources</option>
            <option value="Google">Google</option>
            <option value="Zomato">Zomato</option>
            <option value="Swiggy">Swiggy</option>
            <option value="Yelp">Yelp</option>
          </select>
        </div>
        
        {/* Date Range Filter */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-surface-700 mb-1">
            Date Range
          </label>
          <select
            id="date"
            className="rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[150px]"
          >
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
        
        {/* Sentiment Filter */}
        <div>
          <label htmlFor="sentiment" className="block text-sm font-medium text-surface-700 mb-1">
            Sentiment
          </label>
          <select
            id="sentiment"
            className="rounded-lg border border-surface-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 min-w-[150px]"
          >
            <option value="">All Sentiments</option>
            <option value="positive">Positive</option>
            <option value="neutral">Neutral</option>
            <option value="negative">Negative</option>
          </select>
        </div>
        
        {/* Export Button */}
        <div className="ml-auto self-end">
          <button className="bg-surface-200 text-surface-700 px-4 py-2 rounded-lg hover:bg-surface-300 transition-colors">
            Export Data
          </button>
        </div>
      </Card>
      
      {/* Reviews Table */}
      <ReviewsTable reviews={reviews} />
    </div>
  );
};

export default FeedbackPage;