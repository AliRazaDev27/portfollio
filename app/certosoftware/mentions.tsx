
import { ScrollContainer } from "./scroll-container";


export function Mentions(){
    
    return(
        <div className="w-full bg-yellow flex flex-col justify-center items-center gap-8 py-16">
<div className="w-full max-w-[85vw]">
<h2 className="text-4xl max-w-[600px] font-extrabold text-primary leading-[50px]">
Loved by thousands of iPhone and Android users alike
</h2>
</div>
<ScrollContainer/>


<div className="max-w-[85vw] flex flex-col lg:flex-row items-center gap-4 ">
    
    <p className="text-2xl font-extrabold text-primary text-nowrap">Featured in:</p>
    <div className="flex items-center justify-center  gap-12 py-4  flex-nowrap md:flex-wrap w-[90vw] lg:w-[80vw] overflow-x-auto ">
        <div className="w-[130px] h-[95px] flex items-center justify-center"><img src="/certosoftware/cnbc.svg" alt="" width={130} height={95} className="w-full contrast-[4] hover:contrast-125" /></div>
        <div className="w-[130px] h-[95px] flex items-center justify-center"><img src="/certosoftware/financialtimes.svg" alt="" width={130} height={95} className="w-full contrast-[4] hover:contrast-125"/></div>
       <div className="w-[130px] h-[95px] flex items-center justify-center"> <img src="/certosoftware/newyork.svg" alt="" width={130} height={95} className="w-full contrast-[4] hover:contrast-125"/></div>
        <div className="w-[130px] h-[95px] flex items-center justify-center"><img src="/certosoftware/readersdigest.svg" alt="" width={130} height={95} className="w-full contrast-[4] hover:contrast-125"/></div>
        <div className="w-[130px] h-[95px] flex items-center justify-center"><img src="/certosoftware/zdnet.svg" alt="" width={130} height={95} className="w-full contrast-[4] hover:contrast-125"/></div>
        <div className="w-[130px] h-[95px] flex items-center justify-center"><img src="/certosoftware/wired.svg" alt="" width={130} height={95} className="w-full contrast-[4] hover:contrast-125"/></div>
    </div>
    
</div>
        </div>
    )
}



