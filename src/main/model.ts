import { useResizeDetector } from 'react-resize-detector';
import { useMemo } from 'react';

export const useModel = () => {
  const { width = window.screen.width } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 150
  });

  const isMobile = useMemo<boolean>(() => (width || 0) < 400, [width]);

  return { isMobile };
};
