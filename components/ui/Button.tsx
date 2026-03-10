import React from 'react';

type ButtonVariant = 'primary' | 'dark' | 'outline';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-6 py-3 font-body font-semibold text-center rounded-md transition-colors';

  const variantClasses = {
    primary: 'bg-aden-orange text-white hover:bg-orange-600',
    dark: 'bg-aden-dark-blue text-white hover:bg-blue-800',
    outline: 'border border-aden-orange text-aden-orange hover:bg-aden-orange hover:text-white',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
