import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layout
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import FeedbackPage from './pages/dashboard/FeedbackPage';
import CompetitorsPage from './pages/dashboard/CompetitorsPage';
import CaviarPage from './pages/dashboard/CaviarPage';
import SettingsPage from './pages/dashboard/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Main Routes */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="competitors" element={<CompetitorsPage />} />
        <Route path="caviar" element={<CaviarPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      {/* 404 Route */}
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;