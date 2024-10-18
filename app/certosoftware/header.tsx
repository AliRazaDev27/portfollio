"use client"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlideRightWithArrow } from "./slide-right";



import { useState,useEffect } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [menu, setMenu] = useState(false);
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
      useEffect(() => {
          if(menu){
              document.body.style.overflow = "hidden";
          }
          else{
              document.body.style.overflow = "auto";
          }
      },[menu])
    return(
        <header className={`fixed top-0 left-0 moveDown w-full flex justify-between items-center  px-8 min-h-[15vh] bg-white transition-transform duration-500 z-50 ${isScrollingUp ? "translate-y-0" : "-translate-y-full"}`}>
            <div>
                <img src="/certosoftware/logo.svg" alt="logo" width={150} height={150} />
            </div>
            <div className="hidden lg:flex gap-16 items-center self-end">
                <nav className="h-full">
                    <ul className="flex gap-10 items-end  text-xl font-extrabold text-primary nav-list">
                        <li><span>iPhone</span></li>
                        <li><span>Android</span></li>
                        <li><span>Help</span></li>
                        <li className={`flex justify-center px-6  items-center  rounded-t-3xl relative cursor-pointer  ${open ? "bg-yellow" : "bg-transparent"} `} onClick={() => setOpen(!open)}>
                            
                            <span>Company</span>
                            {
                                open ? <MdKeyboardArrowUp className="w-7 h-7 "/>:<MdKeyboardArrowDown className="w-7 h-7 "/>
                            }
                            
                            <div className={`${open ? "block" : "hidden"}  absolute top-[100%] left-0  rounded-b-3xl rounded-tr-3xl  bg-yellow w-[260px] py-4 ps-6 `}>
                               <ul className="flex flex-col gap-2  text-primary text-xl">
                                <li>
                                <SlideRightWithArrow type="primary"><span>About</span></SlideRightWithArrow>
                                </li>
                                <li>
                               <SlideRightWithArrow type="primary"><span>Insights</span></SlideRightWithArrow>
                                </li>
                                <li>
                                <SlideRightWithArrow type="primary"><span>Resources</span></SlideRightWithArrow>
                                </li>
                                <li>
                                <SlideRightWithArrow type="primary"><span>Affiliates</span></SlideRightWithArrow>
                                </li>
                               </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
                <a href="#" className=" relative -translate-y-[10%] text-white font-bold bg-purple hover:bg-[#2925CC] transition-colors duration-500 px-6 py-4 rounded-full">Sign in</a>
            </div>
            <div className="block lg:hidden">
                            <TbMenu className="size-12 " onClick={() => setMenu(!menu)}/>
            </div>
            <div className={`lg:hidden flex flex-col gap-16 py-8 ps-8  fixed top-full ${menu ? "translate-x-0" : "translate-x-full"} left-0 bg-[#02033B] transition-all duration-500 w-full h-[85vh]  overflow-y-auto `}>
                            <ul className="text-4xl font-bold  space-y-4 ">
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>iPhone</span></SlideRightWithArrow>
                                </li>
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>Android</span></SlideRightWithArrow>
                                </li>
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>Help</span></SlideRightWithArrow>
                                </li>
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>About</span></SlideRightWithArrow>
                                </li>
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>Insights</span></SlideRightWithArrow>
                                </li>
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>Resources</span></SlideRightWithArrow>
                                </li>
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>Affiliates</span></SlideRightWithArrow>
                                </li>
                                <li>
                                    <SlideRightWithArrow type="secondary"><span>Sign in</span></SlideRightWithArrow>
                                </li>
                            </ul>
                            <div className="flex items-center gap-10">
                                <a href="#" className="text-white text-xs underline font-medium">Privacy Policy</a>
                                <a href="#" className="text-white text-xs underline font-medium">Terms of Service</a>
                            </div>
                            <div className="flex items-center  gap-8">
                            <div className="flex items-center justify-center size-12 bg-white hover:bg-[#ffc247] rounded-md"><FaXTwitter className="size-8 text-[#02033B]"/></div>
                            <div className="flex items-center justify-center size-12 bg-white hover:bg-[#ffc247] rounded-md"><FaFacebookF className="size-8 text-[#02033B]"/></div>
                            <div className="flex items-center justify-center size-12 bg-white hover:bg-[#ffc247] rounded-md"><FaYoutube className="size-8 text-[#02033B]"/></div>
                            </div>
            </div>

        </header>
    )
}


