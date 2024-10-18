"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";



export function Header() {
  const [open, setOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Check if scrolling up or down
      if (currentScrollPosition < lastScrollPosition) {
        setIsScrollingUp(true); // scrolling up
      } else {
        setIsScrollingUp(false); // scrolling down
      }
      
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <>
      <header className={`w-full  fixed top-0 left-0 bg-primary h-[15vh] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 hidden md:flex justify-between items-center gap-2 py-4 transition-transform duration-500 z-50 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}`}>
        <div>
          <img src="/gravityteam/assets/logo.svg" alt="logo" />
        </div>
        <nav>
          <ul className="flex justify-between items-center gap-4 text-lg font-light">
            <li className="hover:text-blue-400 cursor-pointer">ABOUT US</li>
            <li className="relative group">
              <div className="py-4 group-hover:text-blue-400 cursor-pointer ">OUR SERVICES</div>
              <div className="hidden group-hover:flex  absolute bg-transparent w-[300px] px-10 py-8   left-0 -translate-x-[25%]    flex-col gap-4 ">
                <div className="hover:text-blue-400 font-normal cursor-pointer">LIQUIDITY FOR CRYPTO EXCHANGES</div>
                <div className="hover:text-blue-400 font-normal cursor-pointer">CRYPTO COIN MARKET MAKING</div>
                <div className="w-[300px] h-full backdrop-blur absolute border border-neutral-400 rounded-2xl bg-transparent   top-0 left-0 overflow-hidden -z-10 "/>
              </div>
              
            </li>
            <li className="hover:text-blue-400 cursor-pointer">CAREERS</li>
            <li className="hover:text-blue-400 cursor-pointer">BLOG</li>
          </ul>
        </nav>
        <div className="flex gap-2 text-lg">
          <img src="/gravityteam/assets/button_before.svg" alt="btnbefore" />
          <div className="relative group">
          <div className="py-4 group-hover:text-blue-400 cursor-pointer ">GET IN TOUCH</div>
              <div className="hidden group-hover:flex  absolute bg-primary w-[300px] px-10 py-8   right-0 border border-white rounded-2xl translate-x-[15%]    flex-col gap-4 ">
                <div className="text-gradient text-sm">What Type of Client Are You?</div>
                <div className="hover:text-blue-400 font-normal cursor-pointer">CRYPTO PROJECT</div>
                <div className="hover:text-blue-400 font-normal cursor-pointer">CRYPTO EXCHANGE</div>
                <div className="hover:text-blue-400 font-normal cursor-pointer">CRYPTO VC</div>
                <div className="hover:text-blue-400 font-normal cursor-pointer">OTHER</div>
              </div>
              </div>
        </div>
      </header>
      <header className="w-full z-50 fixed top-0 left-0   h-[15vh]  px-4 md:hidden flex justify-between items-center gap-2 py-4">
      <div className="w-[120px]">
          <img src="/gravityteam/assets/logo.svg" alt="logo" />
      </div>
      <div className="">
        <button onClick={() => setOpen(!open)}>
          <RxHamburgerMenu className={`${open ? "hidden" : ""} text-white size-8`} />
          <RxCross1 className={`${open ? "" : "hidden"} text-white size-8`} />
        </button>
    <div  className={`${open ? "translate-x-0" : "translate-x-[100%]"} fixed  bg-primary    w-[300px] h-[85vh] transition-all duration-700  flex flex-col justify-between py-6 px-4 border-t border-l border-white right-0 top-[15%]`}>
      <div>
        <ul className="text-2xl font-light space-y-2">
          <li>About Us</li>
          <li>Our Services</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="self-center flex items-center justify-center gap-4">
        <div className="bg-white p-1 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">
    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
</svg>
        </div>
        <div className="bg-white p-1 rounded-sm">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50">
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
</svg>
        </div>
      </div>
    </div>
        </div>  
      </header>
    </>
  );
}

