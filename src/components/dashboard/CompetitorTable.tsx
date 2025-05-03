import React from 'react';
import { TrendingUp, TrendingDown, Minus, ExternalLink } from 'lucide-react';
import { Competitor } from '../../types';

interface CompetitorTableProps {
  competitors: Competitor[];
}

const CompetitorTable: React.FC<CompetitorTableProps> = ({ competitors }) => {
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

  return (
    <div className="w-full bg-white rounded-xl shadow-medium overflow-hidden">
      <div className="p-4 border-b border-surface-200">
        <h3 className="text-lg font-semibold text-surface-800">Nearby Competitors</h3>
      </div>

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
                <td className="px-4 py-3 text-sm font-medium text-surface-700">{competitor.name}</td>
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
    </div>
  );
};

export default CompetitorTable;