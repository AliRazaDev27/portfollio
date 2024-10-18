export function Insights(){
    return(
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[75%] xl:max-w-[65%] mx-auto flex flex-col gap-16 py-16 items-center justify-between">
            <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">Latest insights</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {
                    insights.map((insight, index) => (
                        <div key={index} className="relative flex flex-col  gap-8 pb-8 rounded-3xl overflow-hidden group hover:bg-[#F7C95F]">
                            <div className="h-[170px]  overflow-hidden bg-cover bg-blend-soft-light group-hover:bg-[#F7C95F]" style={{backgroundImage:`url(${insight.img})`}}/>
                            <p className="text-2xl font-bold text-primary px-6">{insight.title}</p>
                            <p className="text-lg font-medium text-primary px-6">{insight.content}</p>
                            <div className="w-max px-3 py-2  text-primary font-semibold bg-white  rounded-full absolute top-4 left-4">{insight.tag}</div>
                        </div>
                    ))
                }
            </div>
            <a href="#" className="bg-yellow hover:bg-[#FDB235] text-primary text-xl font-bold w-max py-3 px-6 rounded-full">View all insights</a>
        </div>
    )
}

const insights = [
    {
        title:"Beware of What You Type: The Rise of Keyboard-Based iPhone Hacking",
        tag:"Expertise",
        content:"Cybercriminals have found a way to bypass Apple’s normal security checks and use third-party custom keyboards to spy on people’s iPhone...",
        img:"/certosoftware/keylogger.jpg",
    },
    {
        title:"How to Detect Spyware on an iPhone",
        tag:"Guides",
        content:"Last August Google warned that over 1 BILLION Apple users may have had their iPhones hacked over a two-year period. By merely visiting a...",
        img:"/certosoftware/detect-spyware.jpg",
    },
    {
        title:"Green or Orange Dot Appearing Randomly on iPhone, Am I Hacked?",
        tag:"Expertise",
        content:"Have you ever noticed a small green or orange dot appearing in the top corner of your iPhone, and have you ever wondered what it means? When...",
        img:"/certosoftware/am-i-hacked.jpeg",
    },
]