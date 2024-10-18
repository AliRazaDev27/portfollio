import { AboutUs } from "./about-us"
import { Downloads } from "./downloads"
import { Features } from "./features"
import { Footer } from "./footer"
import Header from "./header"
import Hero from "./hero"
import { Insights } from "./insights"
import { Mentions } from "./mentions"
import "./style.css"
import { WhatWeDo } from "./what-we-do"

export const metadata = {
    title:"Certo Software"
}

export default function Page(){
    return (
        <div className="">
            <Header/>
            <Hero/>
            <Mentions/>
            <WhatWeDo/>
            <Features/>
            <AboutUs/>
            <Downloads/>
            <Insights/>
            <Footer/>
        </div>
    )
}