import SlideOutGradient from "./slide_out_gradient"
export function Hero() {
    return(
        <div className="h-[87vh]" >
            
                <div  className="pt-[20vh]  text-center flex justify-center items-center py-4">
                <div className="w-min flex flex-col justify-between gap-8  ">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
                <h1>Balancing</h1>
                <h2 className="text-nowrap px-4">Crypto Markets</h2>
                </div>
                <h3 className="text-xl font-light text-wrap w-">Our fully automated proprietary quantitative trading software provides 24/7 liquidity to 350+ digital assets across 30+ centralized spot and derivative crypto exchanges.</h3>
                <div className="bg-gradient p-[2px] w-max mx-auto">
                <div className="bg-primary">
                <SlideOutGradient>
                <div className="px-6 py-3 text-xl ">GET IN TOUCH</div>
                </SlideOutGradient>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}