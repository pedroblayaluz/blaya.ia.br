"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TurtleGameProps {
  onComplete: () => void;
}

export const TurtleGame = ({ onComplete }: TurtleGameProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const turtleRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 300 });
  const [isDragging, setIsDragging] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const startRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const completedRef = useRef(false);
  const flipIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Sea area threshold - 60% from left means x > 60% of container width
  const checkCompletion = (x: number, y: number) => {
    if (!containerRef.current || completedRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const seaThreshold = containerWidth * 0.6; // 60% = right side
    
    if (x > seaThreshold) {
      completeGame();
    }
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (!turtleRef.current || completedRef.current) return;
      e.preventDefault();
      setIsDragging(true);
      startRef.current = { x: e.clientX, y: e.clientY };
      startPosRef.current = { ...position };
      
      // Start flip animation every 0.5 seconds
      if (flipIntervalRef.current) clearInterval(flipIntervalRef.current);
      flipIntervalRef.current = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 500);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (!turtleRef.current || completedRef.current) return;
      e.preventDefault();
      setIsDragging(true);
      startRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      startPosRef.current = { ...position };
      
      // Start flip animation every 0.5 seconds
      if (flipIntervalRef.current) clearInterval(flipIntervalRef.current);
      flipIntervalRef.current = setInterval(() => {
        setIsFlipped(prev => !prev);
      }, 500);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const deltaX = e.clientX - startRef.current.x;
      const deltaY = e.clientY - startRef.current.y;
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const newX = Math.max(0, Math.min(containerRect.width - 100, startPosRef.current.x + deltaX));
      const newY = Math.max(0, Math.min(containerRect.height - 100, startPosRef.current.y + deltaY));
      
      setPosition({ x: newX, y: newY });
      checkCompletion(newX, newY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || !containerRef.current) return;
      e.preventDefault();
      const deltaX = e.touches[0].clientX - startRef.current.x;
      const deltaY = e.touches[0].clientY - startRef.current.y;
      const containerRect = containerRef.current.getBoundingClientRect();
      
      const newX = Math.max(0, Math.min(containerRect.width - 100, startPosRef.current.x + deltaX));
      const newY = Math.max(0, Math.min(containerRect.height - 100, startPosRef.current.y + deltaY));
      
      setPosition({ x: newX, y: newY });
      checkCompletion(newX, newY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsFlipped(false);
      if (flipIntervalRef.current) {
        clearInterval(flipIntervalRef.current);
        flipIntervalRef.current = null;
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setIsFlipped(false);
      if (flipIntervalRef.current) {
        clearInterval(flipIntervalRef.current);
        flipIntervalRef.current = null;
      }
    };

    const turtle = turtleRef.current;
    if (turtle) {
      turtle.addEventListener("mousedown", handleMouseDown, { passive: false });
      turtle.addEventListener("touchstart", handleTouchStart, { passive: false });
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      if (turtle) {
        turtle.removeEventListener("mousedown", handleMouseDown);
        turtle.removeEventListener("touchstart", handleTouchStart);
      }
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, position, checkCompletion]);

  const completeGame = () => {
    completedRef.current = true;
    if (!turtleRef.current) return;
    
    gsap.timeline()
      .to(turtleRef.current, {
        y: -100,
        opacity: 0,
        duration: 0,
        ease: "power2.in",
      })
      .call(() => {
        onComplete();
      }, undefined, 0);
  };

  return (
    <div className="w-screen relative" style={{ height: '600px', marginLeft: 'calc(-50vw + 50%)' }}>
      {/* Game Container - Full Width */}
      <div
        ref={containerRef}
        className="relative w-full h-full"
        style={{
          backgroundImage: 'url(/sea.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Sea overlay - right 30% */}
        <div className="absolute top-0 right-0 bottom-0 w-[30%] bg-gradient-to-l from-cyan-500/20 to-transparent pointer-events-none"></div>

        {/* Draggable Turtle */}
        <div
          ref={turtleRef}
          className="absolute z-20 cursor-grab active:cursor-grabbing select-none transition-shadow"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            width: '100px',
            height: '100px',
            pointerEvents: 'auto',
          }}
        >
          <img
            src="/sea_turtle.png"
            alt="Sea turtle"
            className="w-full h-full object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all"
            style={{ 
              transform: `rotate(90deg) scaleX(${isFlipped ? -1 : 1})`,
              filter: 'hue-rotate(280deg) saturate(1.5)',
            }}
          />
        </div>
      </div>
    </div>
  );
};
