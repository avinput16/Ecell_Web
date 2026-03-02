import React from 'react';

/**
 * Optimized Image component for managing image loading, LCP, and performance.
 * @param {Object} props
 * @param {string} props.src - Image Source URL
 * @param {string} props.alt - Alternative Text for SEO/Accessibility
 * @param {string} props.width - Explicit Width (mandatory for CLS)
 * @param {string} props.height - Explicit Height (mandatory for CLS)
 * @param {string} props.className - Tailwind or CSS class
 * @param {boolean} props.priority - Whether the image is high priority (LCP)
 * @param {boolean} props.lazy - Whether to use native lazy loading
 */
const OptimizedImage = ({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    lazy = true,
    ...props
}) => {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading={priority ? "eager" : (lazy ? "lazy" : "eager")}
            fetchpriority={priority ? "high" : "auto"}
            decoding="async"
            {...props}
        />
    );
};

export default OptimizedImage;
