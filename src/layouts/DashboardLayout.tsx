import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-50">
      <Sidebar />
      <div className="ml-16 lg:ml-64 min-h-screen">
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;