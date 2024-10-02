export function About() {
    return (
        <div className="py-[20vh] px-8 sm:px-4 lg:px-2">
            <div className=" max-w-[40rem] text-center mx-auto space-y-8">
                <h1 className="text-6xl">About Gravity Team</h1>
                <p className="text-xl font-light">At Gravity Team, we are on the mission to balance the supply and demand across crypto markets worldwide. We are a crypto native market maker founded by traders, developers, and innovators who are strong believers and supporters of the future of decentralization and digital assets.</p>
            </div>
            <div className=" mt-[15vh]  bg-gradient-to-r from-blue-500 to-red-500 grid grid-cols-1  py-1 px-1 mx-8 sm:grid-cols-2 md:grid-cols-4 gap-x-1 gap-y-1">
                {data.map((item, index) => (
                    <div className="flex flex-col gap-4 px-6 h-[200px] items-center justify-center bg-primary hover:bg-gradient-to-r from-blue-600 to-red-400 text-center " key={index}>
                        <div className="text-4xl font-medium">{item.value}</div>
                        <div className="text-xl font-light">{item.info}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const data = [
    {
        value:"~$300 billion",
        info:"cumulative trading volume to date",
    },
    {
        value:"1 %",
        info:"of the global crypto spot trading volume",
    },
    {
        value:"~50",
        info:"Gravity Teammates(& growing)",
    },
    {
        value:"30+",
        info:"leading global and local crypto exchanges",
    },
    {
        value:"2017",
        info:"start, crypto-natives",
    },
    {
        value:"1400+",
        info:"crypto-asset pairs",
    },
    {
        value:"24/7",
        info:"liquidity",
    },
    {
        value:"~300 mil",
        info:"trades done to date",
    },
]