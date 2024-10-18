import { DownloadCard } from "./download-card";

export function Downloads() {
    return (
        <div className="flex flex-col items-center justify-center gap-16 px-4  py-24 text-white bg-gradient-purple text-center">
            <p className="text-4xl font-bold">Is someone spying on your phone?</p>
            <p className="text-xl font-medium">Find out with Certo</p>
            <div className="w-min lg:w-fit">
            <div className={`flex flex-wrap flex-row gap-5`}>
                    <a href="#" className="text-xl font-extrabold text-primary py-4 ps-6 pe-14 bg-yellow w-max rounded-full hover:bg-[#FDB235]">Get Certo for iPhone</a>
                    <a href="#" className="text-xl font-extrabold text-white hover:text-[#FDB235] py-4 px-6   border-2 border-white hover:border-[#FDB235] w-max rounded-full ">Get Certo for Android</a>
        </div>
            </div>


        </div>
    )
}