import React from 'react';

interface ArcadeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'red' | 'blue' | 'yellow' | 'green';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ArcadeButton: React.FC<ArcadeButtonProps> = ({
  children,
  onClick,
  color = 'red',
  className = '',
  type = 'button',
}) => {
  const colorClasses = {
    red: 'bg-[#e7372c] border-[#fbd000] text-white hover:bg-[#ff4d42]',
    blue: 'bg-[#4166f5] border-[#fbd000] text-white hover:bg-[#5a7eff]',
    yellow: 'bg-[#fbd000] border-[#e7372c] text-black hover:bg-[#ffdc33]',
    green: 'bg-[#58b847] border-[#fbd000] text-white hover:bg-[#6dd956]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`arcade-btn ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ArcadeButton;