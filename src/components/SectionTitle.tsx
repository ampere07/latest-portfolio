import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, centered = false }) => {
  return (
    <div className={`relative mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-xl md:text-2xl text-[#fbd000] inline-block px-4 py-2 bg-black border-2 border-[#4166f5]">
        {children}
      </h2>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#e7372c] -z-10"></div>
      <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#4166f5] -z-10"></div>
    </div>
  );
};

export default SectionTitle;