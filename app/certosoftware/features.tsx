import { DownloadCard } from "./download-card";

export function Features(){
    return(
        <div className="bg-[#F2F7FF]">
        <div className="max-w-[90%]  sm:max-w-[70%] lg:max-w-[60%] mx-auto  flex flex-col gap-8 py-8 md:py-16  m-auto items-center text-center">
            <p className="text-4xl font-bold text-primary">Get your freedom back, stop mobile spyware today</p>
            <div className="flex  w-full flex-col gap-8 py-8 px-8 bg-white  rounded-3xl items-center">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                        {
                            features.map((feature, index) => (
                                <div key={index} className="flex flex-col items-center px-4 py-4 gap-8">
                                    <div className="sprite" style={{backgroundImage:`url(${feature.iconHover})`}}/>    
                                    <p className="text-2xl font-extrabold text-primary">{feature.title}</p>
                                    <p className="text-lg text-primary">{feature.content}</p>
                                </div>
                            ))
                        }
                </div>
                <DownloadCard type="row"/>   
            </div>
        </div>
        </div>
    )
}
const features = [
    {
        iconLoading:"/certosoftware/spyware-detection-loading.png",
        iconHover:"/certosoftware/spyware-detection-hover.png",
        title:"Spyware detection",
        content:"Our advanced spyware detection engine can identify if a device contains spyware or bugging software.",
    },
    {
        iconLoading:"/certosoftware/keylogger-detection-loading.png",
        iconHover:"/certosoftware/keylogger-detection-hover.png",
        title:"Keylogger detection",
        content:"Find malicious keyboards installed on your device that could allow someone to record things you type (e.g. passwords).",
    },
    {
        iconLoading:"/certosoftware/find-tracking-apps-loading.png",
        iconHover:"/certosoftware/find-tracking-apps-hover.png",
        title:"Find tracking apps",
        content:"Check which apps can access your location, microphone or camera. Get alerted if a known tracking app is installed.",
    },
    {
        iconLoading:"/certosoftware/os-integrity-check-loading.png",
        iconHover:"/certosoftware/os-integrity-check-hover.png",
        title:"OS integrity check",
        content:"Analyze your operating system for signs of tampering that could compromise security, such as Jailbreaking.",
    },
    {
        iconLoading:"/certosoftware/threat-removal-loading.png",
        iconHover:"/certosoftware/threat-removal-hover.png",
        title:"Threat removal",
        content:"Our intelligent scan will either safely remove threats for you or provide easy-to-follow instructions.",
    },
    {
        iconLoading:"/certosoftware/easy-to-use-loading.png",
        iconHover:"/certosoftware/easy-to-use-hover.png",
        title:"Easy to use",
        content:"We create easy to use apps that can check your device for vulnerabilities in a matter of minutes.",
    },
]