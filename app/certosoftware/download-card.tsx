export function DownloadCard({type}:{type:"row"|"col"}){
    return(
        <div className={`flex flex-wrap ${type === "col" ? "flex-col": "flex-row"} gap-5`}>
                    <a href="#" className="text-xl font-extrabold text-primary py-4 ps-6 pe-14 bg-yellow w-max rounded-full hover:bg-[#FDB235]">Get Certo for iPhone</a>
                    <a href="#" className="text-xl font-extrabold text-primary hover:text-[#4335de] py-4 px-6   border-2 border-[#02033b] hover:border-[#4335de] w-max rounded-full ">Get Certo for Android</a>
        </div>
    )
}