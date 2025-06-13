// import { useRef } from 'react';

// export type ScrollDirection = 'left' | 'right';

// export default function useHorizontalScroll<T extends HTMLElement>() {
//   const scrollRef = useRef<T>(null);

//   const scroll = (direction: ScrollDirection) => {
//     const container = scrollRef.current;
//     if (!container) return;

//     const scrollAmount = container.clientWidth * 1;
//     container.scrollBy({
//       left: direction === 'left' ? -scrollAmount : scrollAmount,
//       behavior: 'smooth',
//     });
//   };

//   return { scrollRef, scroll };
// }
import { useRef } from 'react';

const useHorizontalScroll = <T extends HTMLElement>() => {
  const scrollRef = useRef<T>(null);

  const scroll = (direction: 'left' | 'right', visibleCardCount: number) => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(':scope > *') as HTMLElement;
    if (!card) return;

    const cardRect = card.getBoundingClientRect();
    const gap = parseFloat(
      getComputedStyle(scrollRef.current).columnGap ||
        getComputedStyle(scrollRef.current).gap ||
        '0'
    );

    const offset = visibleCardCount * (cardRect.width + gap);

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -offset : offset,
      behavior: 'smooth',
    });
  };

  return { scrollRef, scroll };
};

export default useHorizontalScroll;
