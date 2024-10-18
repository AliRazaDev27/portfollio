"use client"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function CircleAnimated() {
    gsap.registerPlugin(useGSAP,ScrollTrigger);
    useGSAP(() => {
        gsap.fromTo(".circleIn",{
            clipPath: "circle(0% at 50% 50%)",
        } ,{
            scrollTrigger: {
                trigger: ".circleIn",
                start: "top 40%",
                end: "bottom 40%",
            },
            clipPath: "circle(39% at 50% 50%)",
            ease: "none",
            duration: 1.5,
        });
        gsap.to(".bgCircle",{
            scrollTrigger: {
                trigger: ".circleIn",
                start: "top 40%",
                end: "bottom 40%",
            },
            scale:1.05,
            ease: "none",
            duration: 1.5,
        });
    })
    
    return(
        <div className="relative">
                <div className="circleIn ">
                <img src="/certosoftware/whatwedo.webp" alt="" />
                </div>
                <div className="absolute  bgCircle bg-yellow"/>
            </div>
    )
}