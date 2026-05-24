import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const glowRef = useRef(null);
  const frameRef = useRef(null);

  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) {
      return undefined;
    }

    const mouseMove = (e) => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${e.clientX - 80}px, ${e.clientY - 80}px, 0)`;
        }

        if (followerRef.current) {
          followerRef.current.animate(
            { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0)` },
            { duration: 500, fill: 'forwards' }
          );
        }
      });
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const hoverElements = document.querySelectorAll(
      'a, button, .cursor-hover'
    );

    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', mouseMove);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('mousemove', mouseMove);

      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Glow Ring */}
      <div
        ref={followerRef}
        className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden
        md:block
        -translate-x-1/2 -translate-y-1/2
        rounded-full border
        transition-all duration-300 ease-out
        backdrop-blur-md
        ${
          hovered
            ? 'h-24 w-24 border-cyan-300/80 bg-cyan-400/10 shadow-[0_0_80px_rgba(34,211,238,0.9)]'
            : 'h-12 w-12 border-cyan-400/40 bg-cyan-500/5 shadow-[0_0_40px_rgba(34,211,238,0.5)]'
        }`}
      />

      {/* Inner Dot */}
      <div
        ref={cursorRef}
        className={`fixed left-0 top-0 z-[9999]
        pointer-events-none
        hidden md:block
        rounded-full
        -translate-x-1/2 -translate-y-1/2
        transition-all duration-200 ease-out
        ${
          hovered
            ? 'h-3 w-3 bg-white shadow-[0_0_30px_rgba(255,255,255,1)]'
            : 'h-4 w-4 bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,1)]'
        }`}
      />

      {/* Extra Glow Layer */}
      <div
        ref={glowRef}
        className="fixed left-0 top-0 z-[9998] hidden h-40 w-40
        md:block
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"
      />
    </>
  );
};

export default CustomCursor;
