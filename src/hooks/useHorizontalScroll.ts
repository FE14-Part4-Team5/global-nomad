import { useRef } from 'react';

export type ScrollDirection = 'left' | 'right';

export default function useHorizontalScroll<T extends HTMLElement>() {
  const scrollRef = useRef<T>(null);

  const scroll = (direction: ScrollDirection) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 1;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return { scrollRef, scroll };
}
