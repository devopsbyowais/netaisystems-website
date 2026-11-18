import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const base =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.99]';

const variants = {
  primary: 'bg-[#00c8ee] text-[#061023] hover:bg-[#4ad9f5]',
  secondary:
    'border border-[#2a3552] bg-transparent text-white hover:border-[#5fd6ef]/60 hover:bg-white/[0.04]',
  ghost: 'text-[#9aa9bf] hover:text-white'
};

/**
 * Internal link styled as a button. External links should use <a> directly.
 */
const ButtonLink = ({
  to,
  children,
  variant = 'primary',
  withArrow = false,
  className = '',
  ...rest
}) => (
  <Link to={to} className={`${base} ${variants[variant]} ${className}`} {...rest}>
    {children}
    {withArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
  </Link>
);

export default ButtonLink;
