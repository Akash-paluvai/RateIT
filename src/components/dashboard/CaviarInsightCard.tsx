import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { TrendingUp, Star, AlertCircle, LightbulbIcon } from 'lucide-react';
import { CaviarInsight } from '../../types';

interface CaviarInsightCardProps {
  insight: CaviarInsight;
}

const CaviarInsightCard: React.FC<CaviarInsightCardProps> = ({ insight }) => {
  // Get icon based on insight type
  const getIcon = () => {
    switch (insight.type) {
      case 'praise':
        return <Star className="text-green-500" />;
      case 'complaint':
        return <AlertCircle className="text-red-500" />;
      case 'suggestion':
        return <LightbulbIcon className="text-accent-500" />;
      case 'trend':
        return <TrendingUp className="text-primary-500" />;
      default:
        return <LightbulbIcon className="text-primary-500" />;
    }
  };

  // Get badge variant based on impact
  const getBadgeVariant = () => {
    switch (insight.impact) {
      case 'high':
        return 'danger';
      case 'medium':
        return 'warning';
      case 'low':
        return 'primary';
      default:
        return 'primary';
    }
  };

  return (
    <Card border hover className="h-full">
      <div className="flex items-start space-x-3">
        <div className="p-2 rounded-lg bg-surface-100">
          {getIcon()}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-surface-800">{insight.title}</h3>
            <Badge variant={getBadgeVariant()} size="sm">
              {insight.impact} impact
            </Badge>
          </div>
          <p className="text-surface-600 text-sm">{insight.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default CaviarInsightCard;