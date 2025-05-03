import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    accent: 'bg-accent-100 text-accent-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    danger: 'bg-red-100 text-red-800',
  };

  const sizeStyles = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-2.5',
  };

  return (
    <span className={`
      inline-flex items-center font-medium rounded-full
      ${variantStyles[variant]} 
      ${sizeStyles[size]} 
      ${className}
    `}>
      {children}
    </span>
  );
};

export default Badge;