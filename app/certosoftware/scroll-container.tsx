"use client";
import { MdStarRate } from "react-icons/md";
import React, { useRef, useState, useEffect } from 'react';
import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

export function ScrollContainer() {
    const boxRef = useRef<HTMLDivElement>(null);
    const [maxScroll, setMaxScroll] = useState(0); // Store the maximum scroll limit
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


    return (
        <div
        ref={boxRef}
      className="select-none"
      style={{
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        cursor: 'grab',
        touchAction: 'none',
      }}
      
        >
            <animated.div
        {...bind()}
        style={{
          display: 'flex',
          gap:"16px",
          padding: '16px',         
          touchAction: 'none',
          transform: scrollX.to((x) => `translateX(${-x}px)`),
        }}
      >
        {
    mentions.map((mention,index) => (
      <MentionCard key={index} mention={mention} />
    ))
   }
   </animated.div>
   
   </div>

   
    )
}
function MentionCard({mention}:{mention:{author:string, content:string}}){
    return(
        <div className="flex flex-col flex-none cursor-grab active:cursor-grabbing w-[90vw]  select-none sm:w-[40vw] lg:w-[30vw] justify-stretch gap-6 py-8 px-8 rounded-3xl  bg-white">
            <div className="flex items-center">
                {Array.from({length: 5}).map((_, index) => (
                    <MdStarRate key={index} className="text-yellow size-10"/>
                ))}
            </div>
            <p className="text-primary text-lg font-medium">
                {mention.content}
            </p>
            <p className="text-primary text-xl font-bold">{mention.author}</p>

        </div>

    )
}
const mentions = [
    {
        author:"Evelyn K, Sitejabber",
        content:"Very happy with Certo's app. I am not very technically minded but I found it easy enough to use. Also it doesn't seem to slow my phone down or pester me with ads like lots of other apps. Would definitely recommend it.",
    },
    {
        author:"Clayton Horn, Play Store",
        content:"Best malware detection and removal you can find. I&#39ve been using this for about a year now and would recommend to anyone. I have an antivirus app as well but I always keep this app on my phone as I think it&#39s a deeper scan. Good additional features as well.",
    },
    {
        author:"Katey Flamank, Trustpilot",
        content:"Installation was a breeze and the software is so easy to use! You just plug your charger into the computer and your phone and scan! That&#39s it! Thanks for the peace of mind Certo!",
    },
    {
        author:"Kiyansh Paswan, Play Store",
        content:"My partner and I both use this and it&#39s a great app. First time I used it it found a bunch of bad files that I think I accidentally downloaded one time and didn't know where they went. Great to know that it will find and remove anything bad from my phone. Thanks!",
    },
    {
        author:"Danny1878, App Store",
        content:"I researched this app after my Facebook account was hacked. I was concerned the person may have accessed my entire phone. Certo helped me to rest easy that my OS was intact! A must have app in this day and age.",
    },
    {
        author:"Michael, Trustpilot",
        content:"Certo made checking my apple iPhone and iPad for viruses and malware so easy. I wish I would have gotten there program sooner. Their customer service is also top notch and friendly staff.",
    },
    {
        author:"Sandee, Trustpilot",
        content:"Not only does Certo have the best customer service, they were easy to install and the scan was what was promised! I would recommend this company to anyone who wants to make sure their phones are safe. Best of the best! Thank you Certo team!",
    },
    {
        author:"BeaunTeK, App Store",
        content:"35 years in Cybersecurity. This App is Safe, Effective, and Extremely Informative. Beginner through Expert Users can benefit."
    }
]