import React from 'react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import Card from '../../components/ui/Card';
import CompetitorTable from '../../components/dashboard/CompetitorTable';
import { competitors, restaurant } from '../../data/mockData';

const CompetitorsPage: React.FC = () => {
  // Calculate the average rating of all competitors
  const avgCompetitorRating = competitors.reduce((sum, comp) => sum + comp.avgRating, 0) / competitors.length;
  
  return (
    <div>
      <DashboardHeader 
        title="Competitor Insights" 
        subtitle="Monitor nearby restaurants and understand your competitive landscape"
      />
      
      {/* Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <h3 className="text-sm font-medium text-surface-500 mb-1">Your Rating vs Local Average</h3>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">{restaurant.avgRating.toFixed(1)}</div>
                <div className="text-sm text-surface-500 mt-1">Your Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-surface-700">{avgCompetitorRating.toFixed(1)}</div>
                <div className="text-sm text-surface-500 mt-1">Local Average</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-surface-100">
              <div className="text-sm font-medium text-surface-700">
                {restaurant.avgRating > avgCompetitorRating ? (
                  <span className="text-green-600">You're above the local average! ↑</span>
                ) : (
                  <span className="text-red-600">You're below the local average ↓</span>
                )}
              </div>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <h3 className="text-sm font-medium text-surface-500 mb-1">Review Volume Comparison</h3>
            <div className="h-[120px] flex items-center justify-center">
              Chart visual placeholder
            </div>
            <div className="mt-4 pt-4 border-t border-surface-100">
              <div className="text-sm font-medium text-surface-700">
                <span className="text-primary-600">Your restaurant has 18% more reviews than average</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <h3 className="text-sm font-medium text-surface-500 mb-1">Sentiment Comparison</h3>
            <div className="h-[120px] flex items-center justify-center">
              Chart visual placeholder
            </div>
            <div className="mt-4 pt-4 border-t border-surface-100">
              <div className="text-sm font-medium text-surface-700">
                <span className="text-green-600">7% higher positive sentiment than competitors</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Caviar Suggestions */}
      <Card className="mb-8 p-6 border-l-4 border-l-secondary-500">
        <h3 className="text-lg font-semibold text-surface-800 mb-3">Caviar's Competitive Edge Suggestions</h3>
        <ul className="space-y-3 text-surface-700">
          <li className="flex items-start">
            <span className="mr-2 text-secondary-500">•</span>
            <p><strong>Weekend Combo Offer:</strong> Top performers in your area are seeing 22% higher weekend traffic with family meal deals.</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-secondary-500">•</span>
            <p><strong>Extended Happy Hour:</strong> Competitors with 4+ star ratings often extend happy hour until 7pm on weekdays.</p>
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-secondary-500">•</span>
            <p><strong>Social Media Visibility:</strong> Nearby restaurants with higher engagement post 3-4 times more food photos weekly.</p>
          </li>
        </ul>
      </Card>
      
      {/* Competitors Table */}
      <CompetitorTable competitors={competitors} />
    </div>
  );
};

export default CompetitorsPage;