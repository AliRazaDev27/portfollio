export function SlideRightWithArrow({children,type}:{children:React.ReactNode,type:palette}) {
   
    return(
        <div className="flex items-center  gap-4  group py-2">
            <ArrowRight type={type}/>
            {type === "primary" ? 
            <div className={`text-[#02033b] group-hover:text-[#4335DE]`}>{children}</div>:
            <div className={`text-[#ffc247] group-hover:text-[#ffffff]`}>{children}</div>
}
        </div>
    )
}
function ArrowRight({type}:{type:palette}) {
    return(
        
            <div className={`relative w-8 group-hover:w-20 transition-[width] duration-500 h-[3px] ${type === "primary" ? "bg-primary":"bg-[#ffc247]" } ${type === "primary" ? "group-hover:bg-[#4335de]":"group-hover:bg-white" } rounded-full`}>
                <div className={`absolute  left-[100%] -translate-y-[1px] w-3  h-[3px] rotate-[140deg] origin-left ${type === "primary" ? "bg-primary":"bg-[#ffc247]" } ${type === "primary" ? "group-hover:bg-[#4335de]":"group-hover:bg-white" } transition-none rounded-full`}/>
                <div className={`absolute  left-[100%] translate-y-[1px] w-3  h-[3px] -rotate-[140deg] origin-left ${type === "primary" ? "bg-primary":"bg-[#ffc247]" } ${type === "primary" ? "group-hover:bg-[#4335de]":"group-hover:bg-white" } transition-none rounded-full`}/>
            </div>
        
    )
}

type palette = "primary"|"secondary"