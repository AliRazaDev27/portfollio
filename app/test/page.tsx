"use client"
import "./styles.css"
import React, { useRef, useState, useEffect } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';


export default function Page(){
    const boxRef = useRef<HTMLDivElement>(null);
    const [maxScroll, setMaxScroll] = useState(0); // Store the maximum scroll limit
    console.log(maxScroll)
    const [{ scrollX }, api] = useSpring(() => ({
        scrollX: 0,
        config: { tension: 300, friction: 30 },
      }));
      const bind = useDrag(({ down, movement: [mx], memo = scrollX.get() }) => {
        // Update spring value based on drag movement
        if (boxRef.current) {
            let newScrollX = memo - mx;

            // Clamp the scroll position to prevent scrolling out of bounds
            if (newScrollX < 0) newScrollX = 0; // Prevent scrolling past the left boundary
            if (newScrollX > maxScroll) newScrollX = maxScroll;
          api.start({

            scrollX: newScrollX
          });
        }
        return memo;
      });
      useEffect(() => {
        if (boxRef.current) {
          const containerWidth = boxRef.current.offsetWidth;
          const contentWidth = boxRef.current.scrollWidth;
          setMaxScroll(contentWidth - containerWidth); // Max scroll is content width - container width
        }
      }, []);

    

    return(
        <div className="w-full h-screen  flex items-center justify-center">
         <div
            ref={boxRef}
          className="border border-black select-none"
          style={{
            overflow: 'hidden',
            display: 'flex',
            gap: '8px',
            width: '100%',
            cursor: 'grab',
          }}
          
            >
                 <animated.div
        {...bind()}
        style={{
          display: 'flex',
          transform: scrollX.to((x) => `translateX(${-x}px)`),
        }}
      >
            {Array.from({length:10}).map((_, index) => (
                <div key={index} className={`text-2xl font-bold min-w-[300px] aspect-square bg-red-500 flex items-center justify-center`}>
                    {index}
                </div>
            ))}
        </animated.div>
         </div>
        </div>
    )
}
