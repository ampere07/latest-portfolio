import React from 'react';

interface PixelatedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const PixelatedImage: React.FC<PixelatedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
}) => {
  return (
    <div className={`relative ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="pixelated w-full h-auto"
        loading="lazy"
      />
      <div className="absolute inset-0 border-2 border-[#fbd000] pointer-events-none"></div>
    </div>
  );
};

export default PixelatedImage;