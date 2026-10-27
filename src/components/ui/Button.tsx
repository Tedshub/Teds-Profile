import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  target,
  rel,
  icon,
  children,
  className,
  ...props
}) => {
  const baseClasses = cn(
    'btn',
    variant === 'primary' ? 'btn-primary' : 'btn-outline',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? rel || 'noopener noreferrer' : rel}
        className={baseClasses}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
      {icon}
    </button>
  );
};
