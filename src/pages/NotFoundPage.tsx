import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-surface-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-primary-500 mb-6">404</h1>
        <h2 className="text-3xl font-heading font-bold text-surface-800 mb-4">Page Not Found</h2>
        <p className="text-lg text-surface-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button icon={<Home size={18} />}>
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;