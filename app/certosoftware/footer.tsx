import { SlideRightWithArrow } from "./slide-right";
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer(){
    return(
        <div className="bg-primary">
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[65%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-8 ">
            <div className="sm:row-start-3 sm:row-span-1 sm:col-span-2 lg:row-start-1 lg:row-span-2 lg:col-start-2 lg:col-span-1   flex flex-col gap-6 py-8">
                <p className="text-4xl text-white font-bold">Certo</p>
                <hr />
                <div>
                <ul className="flex flex-col sm:flex-row lg:flex-col flex-wrap gap-2 text-lg font-semibold *:sm:w-[32%] *:lg:w-full">
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
                </div>
                
            </div>
            <div className=" sm:row-start-4 sm:row-span-1 sm:col-start-1 lg:row-start-1 lg:row-span-1 lg:col-start-3 lg:col-span-1">
                <div className="bg-yellow text-primary flex flex-col gap-4 py-8 px-8 rounded-3xl">
                    <p className="text-2xl font-bold">Sign up to our newsletter</p>
                    <p>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                    <div className="flex w-full items-center rounded-full overflow-hidden">
                        <input type="email" placeholder="Email address" className="w-[100%] px-4 py-2 outline-none" required/>
                        <button className="bg-primary text-white ps-4 pe-6 py-2 rounded-e-full">Submit</button>
                    </div>

                </div>
            </div>
            <div className="sm:row=start-4 sm:row-span-1 sm:col-start-2 lg:row-start-3 lg:row-span-1 lg:col-span-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 py-8">
                <div className="max-w-[200px] sm:w-[50%]">
                    <img src="/certosoftware/coalition_against_stalkerware_logo.png" alt="" />
                </div>
                <div className="max-w-[300px] sm:w-[70%]  bg-white px-4 py-4 flex items-center gap-4 rounded-3xl">
                    <div><img src="/certosoftware/Globee-Award-2023.webp" alt="" /></div>
                    <div><img src="/certosoftware/Cybersecurity-Excellence-Gold-2023.webp" alt="" /></div>
                    <div><img src="/certosoftware/Global-InfoSec-Awards-Winner-for-2024-250px.png" alt="" /></div>
                </div>
            </div>
            <div className="sm:row-start-1 sm:row-span-2 sm:col-start-1 lg:row-start-1 lg:row-span-1 flex flex-col gap-8 text-white">
                <p className="text-2xl font-semibold">Scan. Detect. Remove.</p>
                <div className="flex items-center  gap-8">
                            <div className="flex items-center justify-center size-12 bg-white hover:bg-[#ffc247] rounded-md"><FaXTwitter className="size-8 text-[#02033B]"/></div>
                            <div className="flex items-center justify-center size-12 bg-white hover:bg-[#ffc247] rounded-md"><FaFacebookF className="size-8 text-[#02033B]"/></div>
                            <div className="flex items-center justify-center size-12 bg-white hover:bg-[#ffc247] rounded-md"><FaYoutube className="size-8 text-[#02033B]"/></div>
                            </div>
                <div className="flex items-center gap-10">
                                <a href="#" className="text-white text-xs underline font-medium">Privacy Policy</a>
                                <a href="#" className="text-white text-xs underline font-medium">Terms of Service</a>
                            </div>
                
            </div>
            <div className="sm:row-start-1 sm:row-span-1 sm:col-start-2 lg:row-start-2 lg:row-span-1 lg:col-start-1 lg:col-span-1 flex flex-col gap-8 text-white text-sm">
            <p>Copyright © 2024 Certo Software Limited | Registered in England & Wales No. 10072356</p>
            <p>Designed & developed by Bigger Picture</p>
            </div>
            <div className="sm:row-start-2 sm:row-span-1 sm:col-start-2 lg:row-start-4 lg:col-start-1 lg:col-span-2">
            <p className="text-white text-sm pb-8">Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>                
            </div>
        </div>
        </div>
    )
}