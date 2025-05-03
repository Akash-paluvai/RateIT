import React from 'react';
import Card from '../ui/Card';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  description?: string;
  icon?: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  change,
  description,
  icon,
}) => {
  const renderChangeIndicator = () => {
    if (change === undefined) return null;
    
    if (change > 0) {
      return (
        <div className="flex items-center text-green-600 text-sm font-medium">
          <ArrowUpRight size={16} className="mr-1" />
          <span>{Math.abs(change)}%</span>
        </div>
      );
    } else if (change < 0) {
      return (
        <div className="flex items-center text-red-600 text-sm font-medium">
          <ArrowDownRight size={16} className="mr-1" />
          <span>{Math.abs(change)}%</span>
        </div>
      );
    } else {
      return (
        <div className="flex items-center text-surface-500 text-sm font-medium">
          <Minus size={16} className="mr-1" />
          <span>0%</span>
        </div>
      );
    }
  };

  return (
    <Card shadow="soft" className="h-full">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-surface-500">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold text-surface-900">{value}</p>
            <div className="ml-2">{renderChangeIndicator()}</div>
          </div>
          {description && (
            <p className="mt-1 text-sm text-surface-500">{description}</p>
          )}
        </div>
        {icon && (
          <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;