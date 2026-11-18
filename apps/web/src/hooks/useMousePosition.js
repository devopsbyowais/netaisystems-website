import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let frameId;
    let lastX = -100;
    let lastY = -100;

    const handleMouseMove = (e) => {
      // Cancel previous frame if it exists
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = requestAnimationFrame(() => {
        // Only update state if position changed significantly (threshold of 2px) to prevent micro-renders
        if (Math.abs(e.clientX - lastX) > 2 || Math.abs(e.clientY - lastY) > 2) {
          lastX = e.clientX;
          lastY = e.clientY;
          setPosition({ x: e.clientX, y: e.clientY });
        }
      });
    };

    // Use passive listener for better scroll/interaction performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};

export default useMousePosition;