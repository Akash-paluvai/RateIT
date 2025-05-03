import React from 'react';
import { BarChart3, Users, Star, TrendingUp } from 'lucide-react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import MetricCard from '../../components/dashboard/MetricCard';
import Card from '../../components/ui/Card';
import CaviarInsightCard from '../../components/dashboard/CaviarInsightCard';
import { restaurant, caviarInsights } from '../../data/mockData';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <DashboardHeader 
        title={`Welcome back, ${restaurant.name}`} 
        subtitle="Here's what's happening with your restaurant today"
      />
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          title="Average Rating"
          value={restaurant.avgRating.toFixed(1)}
          change={0.2}
          description="Last 30 days"
          icon={<Star size={20} />}
        />
        <MetricCard
          title="Total Reviews"
          value={restaurant.totalReviews}
          change={5.2}
          description="Last 30 days"
          icon={<BarChart3 size={20} />}
        />
        <MetricCard
          title="Weekly Change"
          value={`${restaurant.weeklyChange > 0 ? '+' : ''}${restaurant.weeklyChange}%`}
          description="Vs. previous week"
          icon={<TrendingUp size={20} />}
        />
        <MetricCard
          title="Retention Rate"
          value={`${restaurant.retentionRate}%`}
          change={-1.5}
          description="Returning customers"
          icon={<Users size={20} />}
        />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="h-[300px] flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Ratings Trend</h3>
            <p className="text-surface-500 text-sm">Line chart showing ratings over time</p>
            <div className="mt-6 text-primary-500">Chart visualization will be displayed here</div>
          </div>
        </Card>
        <Card className="h-[300px] flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Review Volume</h3>
            <p className="text-surface-500 text-sm">Bar graph showing volume of reviews</p>
            <div className="mt-6 text-primary-500">Chart visualization will be displayed here</div>
          </div>
        </Card>
      </div>
      
      {/* Caviar Insights */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-surface-800">
          Caviar's Latest Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {caviarInsights.slice(0, 3).map((insight) => (
            <CaviarInsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      </div>
      
      {/* Word Cloud */}
      <Card className="h-[250px] flex items-center justify-center mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">Most Used Terms in Reviews</h3>
          <p className="text-surface-500 text-sm">Word cloud highlighting common phrases</p>
          <div className="mt-6 text-primary-500">Word cloud visualization will be displayed here</div>
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;