import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SEOOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
}

export function SEOOptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false,
  placeholder,
  sizes
}: SEOOptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP version of image (if supported)
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  return (
    <picture className={cn("block", className)}>
      {/* WebP version for better performance */}
      <source 
        srcSet={webpSrc} 
        type="image/webp"
        sizes={sizes}
      />
      
      {/* Fallback to original format */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          hasError && "opacity-50",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(true);
        }}
        // Add structured data attributes
        itemProp="image"
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
      />
      
      {/* Loading placeholder */}
      {!isLoaded && placeholder && (
        <div 
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-muted animate-pulse",
            className
          )}
        >
          <div className="text-muted-foreground text-sm">
            {placeholder}
          </div>
        </div>
      )}
    </picture>
  );
}