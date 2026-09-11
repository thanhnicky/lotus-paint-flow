import { useEffect, useState, type ImgHTMLAttributes } from "react";

/**
 * LazyImage — renders a transparent placeholder during SSR so React 19
 * does NOT auto-generate <link rel="preload"> hints for below-the-fold images.
 * The real `src` is set after hydration, letting the browser defer the fetch
 * until the image approaches the viewport (native lazy-loading).
 */
type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

export function LazyImage({ src, alt, ...props }: LazyImageProps) {
  const [resolvedSrc, setResolvedSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    setResolvedSrc(src);
  }, [src]);

  return (
    <img
      src={resolvedSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
}
