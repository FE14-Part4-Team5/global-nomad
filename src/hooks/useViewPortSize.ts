import { useEffect, useState } from 'react';

type ViewportSize = 'mobile' | 'tablet' | 'desktop';

export default function useViewPortSize() {
  const getViewportType = (size: number): ViewportSize => {
    if (size < 768) return 'mobile';
    if (size < 1200) return 'tablet';
    return 'desktop';
  };

  const [viewportSize, setViewportSize] = useState<ViewportSize>(
    getViewportType(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportSize(getViewportType(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { viewportSize };
}
