import React from 'react';
import { Bell, Search } from 'lucide-react';

interface DashboardHeaderProps {
  title: string;
  subtitle?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-surface-800">{title}</h1>
        {subtitle && <p className="text-surface-500 mt-1">{subtitle}</p>}
      </div>
      
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-surface-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-surface-400" 
          />
        </div>
        
        {/* Notifications */}
        <button className="relative p-2 rounded-full hover:bg-surface-100 transition-colors">
          <Bell size={20} className="text-surface-600" />
          <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-secondary-500"></span>
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;