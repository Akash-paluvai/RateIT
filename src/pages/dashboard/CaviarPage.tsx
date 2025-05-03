import React from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import Card from '../../components/ui/Card';
import CaviarInsightCard from '../../components/dashboard/CaviarInsightCard';
import CaviarChatbot from '../../components/dashboard/CaviarChatbot';
import { caviarInsights } from '../../data/mockData';

const CaviarPage: React.FC = () => {
  return (
    <div>
      <DashboardHeader 
        title="Caviar AI Assistant" 
        subtitle="Your smart analyst providing insights and strategic feedback"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          {/* Summary Panel */}
          <Card className="mb-6">
            <h3 className="text-lg font-semibold text-surface-800 mb-4">Executive Summary</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4 py-1">
                <h4 className="font-medium text-surface-700">Most Common Praise</h4>
                <p className="text-surface-600">Your service staff is regularly highlighted for being friendly and attentive, with 78% of positive reviews mentioning this aspect.</p>
              </div>
              
              <div className="border-l-4 border-red-500 pl-4 py-1">
                <h4 className="font-medium text-surface-700">Top Complaint</h4>
                <p className="text-surface-600">Wait times during peak hours (7-9pm) are mentioned in 65% of negative reviews, with an average reported wait of 25-30 minutes.</p>
              </div>
              
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-50 p-4 rounded-lg">
                  <h4 className="font-medium text-surface-700 mb-2">Sentiment Shift</h4>
                  <p className="text-lg font-semibold text-green-600">+12% Positive</p>
                  <p className="text-sm text-surface-500">Last 30 days vs. previous period</p>
                </div>
                
                <div className="bg-surface-50 p-4 rounded-lg">
                  <h4 className="font-medium text-surface-700 mb-2">Customer Engagement</h4>
                  <p className="text-lg font-semibold text-primary-600">+7% Response Rate</p>
                  <p className="text-sm text-surface-500">Improvement in response frequency</p>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Strategic Suggestions */}
          <Card>
            <h3 className="text-lg font-semibold text-surface-800 mb-4">Strategic Recommendations</h3>
            
            <div className="space-y-4">
              <div className="flex">
                <div className="mr-4 p-2 bg-surface-100 rounded-lg h-fit">
                  <span className="text-2xl">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-surface-800">Improve Wait Time Management</h4>
                  <p className="text-surface-600 mb-2">Add additional staff during 7-9pm peak hours to reduce customer wait times.</p>
                  <div className="text-sm bg-primary-50 text-primary-800 p-2 rounded">
                    <strong>Potential Impact:</strong> 22% reduction in negative reviews based on similar implementations at other restaurants.
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-2 bg-surface-100 rounded-lg h-fit">
                  <span className="text-2xl">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-surface-800">Expand Vegetarian Menu Options</h4>
                  <p className="text-surface-600 mb-2">There's a 31% increase in requests for more plant-based options in the last quarter.</p>
                  <div className="text-sm bg-primary-50 text-primary-800 p-2 rounded">
                    <strong>Potential Impact:</strong> Competitor analysis shows 15% revenue increase from similar menu expansions.
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 p-2 bg-surface-100 rounded-lg h-fit">
                  <span className="text-2xl">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-surface-800">Promote Signature Dishes on Social Media</h4>
                  <p className="text-surface-600 mb-2">Your Butter Chicken has outstanding reviews but low awareness among new customers.</p>
                  <div className="text-sm bg-primary-50 text-primary-800 p-2 rounded">
                    <strong>Potential Impact:</strong> 18% increase in first-time orders based on targeted promotion strategies.
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <div>
          {/* Insights Cards */}
          <h3 className="text-lg font-semibold text-surface-800 mb-4">Latest Insights</h3>
          <div className="space-y-4 mb-6">
            {caviarInsights.map((insight) => (
              <CaviarInsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Chatbot Interface */}
      <h3 className="text-lg font-semibold text-surface-800 mb-4">Interactive Assistant</h3>
      <CaviarChatbot />
    </div>
  );
};

export default CaviarPage;