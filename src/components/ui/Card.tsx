import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'none' | 'soft' | 'medium' | 'hard';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  border?: boolean;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  shadow = 'medium',
  padding = 'md',
  border = false,
  hover = false,
}) => {
  const shadowStyles = {
    none: '',
    soft: 'shadow-soft',
    medium: 'shadow-medium',
    hard: 'shadow-hard',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-6',
  };

  const borderStyle = border ? 'border border-surface-200' : '';
  const hoverStyle = hover ? 'transition-transform duration-200 hover:translate-y-[-4px]' : '';

  return (
    <div className={`
      bg-white rounded-xl 
      ${shadowStyles[shadow]} 
      ${paddingStyles[padding]} 
      ${borderStyle} 
      ${hoverStyle} 
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;