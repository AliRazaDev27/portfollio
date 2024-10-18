import {DownloadCard} from "./download-card";


export default function Hero() {
    return(
        <div className="w-full px-4 overflow-hidden">
        <div className="max-w-4xl  mx-auto min-h-[100vh] pt-[15vh] grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="col-span-7 flex flex-col justify-center gap-8">
                <h1 className="showUp text-5xl leading-snug font-extrabold text-primary">Your mobile privacy is our mission</h1>
                <p className="showUp text-lg font-medium text-primary">Think your phone has been hacked? Our trusted apps make it easy for you to scan, detect and remove threats from your iPhone and Android devices.</p>
                <div className="moveUp">
                <DownloadCard type="col" />
                </div>
            </div>
            <div className="col-span-5 flex flex-col justify-center relative">
                <div className="w-[200px] moveUp">
                <img src="/certosoftware/hero1.png" alt="hero" />
                </div>
                <div  className="rotate h-full w-[600px] md:rotate-[6deg]  absolute -z-10" style={{backgroundImage: `url("/certosoftware/hero2.png")`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",maskImage: `url("/certosoftware/tri.svg")`}}/>
            </div>

        </div>
        </div>

    )
}