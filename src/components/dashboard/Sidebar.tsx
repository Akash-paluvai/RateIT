import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  MessageSquare, 
  BarChart3, 
  Users, 
  Settings, 
  LogOut, 
  ChevronLeft,
  ChevronRight,
  ChefHat 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { 
      to: '/dashboard', 
      icon: <LayoutDashboard size={20} />, 
      label: 'Overview',
      exact: true 
    },
    { 
      to: '/dashboard/feedback', 
      icon: <MessageSquare size={20} />, 
      label: 'Feedback & Ratings' 
    },
    { 
      to: '/dashboard/competitors', 
      icon: <Users size={20} />, 
      label: 'Competitor Insights' 
    },
    { 
      to: '/dashboard/caviar', 
      icon: <BarChart3 size={20} />, 
      label: 'Caviar AI Assistant' 
    },
    { 
      to: '/dashboard/settings', 
      icon: <Settings size={20} />, 
      label: 'Settings' 
    },
  ];
  
  const isActivePath = (path: string, exact = false) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };
  
  return (
    <div 
      className={`
        h-screen fixed left-0 top-0 z-40 bg-white border-r border-surface-200
        transition-all duration-300 ease-in-out
        ${isCollapsed ? 'w-16' : 'w-64'}
      `}
    >
      {/* Logo */}
      <div className="flex items-center h-16 px-4 border-b border-surface-200">
        <Link to="/dashboard" className="flex items-center space-x-2 overflow-hidden">
          <ChefHat className="text-primary-500 flex-shrink-0" size={24} />
          <span className={`
            font-heading font-semibold text-xl text-surface-800
            transition-opacity duration-200
            ${isCollapsed ? 'opacity-0' : 'opacity-100'}
          `}>
            RateIT
          </span>
        </Link>
      </div>
      
      {/* Navigation */}
      <div className="px-2 py-4">
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`
                flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors group
                ${isActivePath(item.to, item.exact) 
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-surface-600 hover:bg-surface-50 hover:text-surface-900'}
              `}
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <span className={`
                transition-opacity duration-200
                ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}
              `}>
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      
      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-surface-200">
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="mb-4 text-surface-500 hover:text-surface-700 p-2 rounded-lg hover:bg-surface-100 transition-colors w-full flex items-center justify-center"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
        
        {/* Logout */}
        <Link
          to="/"
          className={`
            flex items-center space-x-3 px-3 py-2 rounded-lg
            text-surface-600 hover:bg-surface-50 hover:text-surface-900 transition-colors
          `}
        >
          <LogOut size={20} />
          <span className={`
            transition-opacity duration-200
            ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}
          `}>
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;