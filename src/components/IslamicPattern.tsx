import React from 'react';

interface IslamicPatternProps {
  variant?: 'light' | 'dark' | 'subtle';
  opacity?: number;
  patternType?: 'star8' | 'girih' | 'arabesque';
  className?: string;
  size?: number;
}

export const IslamicPattern: React.FC<IslamicPatternProps> = ({
  variant = 'light',
  opacity,
  className = '',
  size,
}) => {
  // If variant is dark, provide the subtle inverted gold/white accent for dark banners:
  if (variant === 'dark') {
    return (
      <div
        className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${className}`}
        style={{
          opacity: opacity !== undefined ? opacity : 0.12,
          backgroundImage: `url('/WhatsApp%20Image%202026-09-25%20at%2010.20.39%20PM.jpeg')`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center center',
          backgroundSize: size ? `${size}px auto` : '366px 178px',
          filter: 'invert(1) brightness(1.6)',
        }}
        aria-hidden="true"
      />
    );
  }

  // On light sections, the site-wide fixed background from WhatsApp Image is already beautifully visible!
  return null;
};

