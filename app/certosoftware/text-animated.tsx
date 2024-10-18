"use client"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function TextAnimated({children,useParent}:{children:React.ReactNode,useParent:boolean}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef(null)
    gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(() => {
        const triggerNode = useParent ? containerRef.current?.parentElement : containerRef.current
        console.log(triggerNode)
        gsap.to(textRef.current, {
            scrollTrigger: {
                trigger: triggerNode,
                start: "top 40%",
                end: "bottom 40%",
            },
            y: 0,
            opacity: 1,
            ease: "none",
            duration: 1,
        })
    });
    return(
        <div ref={containerRef} className="h-max relative overflow-hidden">
  <div ref={textRef} className="relative translate-y-full opacity-50">
   {children}
  </div>
</div>
    )
}