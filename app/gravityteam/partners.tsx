export function Partners() {
    const data1 = partners.slice(0, 4)
    const data2 = partners.slice(4, 8)
    return (
        <div className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-4 px-4 ">
            <div className="flex  items-center justify-center ">
            <div className="text-6xl">
            <p>Our Partners &</p>
            <p>Friends</p>
            </div>
            </div>
            <div className="flex items-center justify-center gap-4 overflow-hidden">
                <div className=" flex flex-col items-center gap-4  animate-up">
                    {data1.map((item, index) =>{
                        return <div key={index} className="flex items-center justify-center  bg-gray-800 w-[200px] aspect-square rounded-lg border border-neutral-500">
                            <div className="flex flex-col items-center gap-4 text-center">
                            <img src={item.image} alt="partner" width={90} height={90} />
                            <p className="uppercase">{item.name}</p>
                            </div>
                        </div>
                    })}
                </div>
                <div className=" flex flex-col items-center gap-4 animate-down">
                    {data2.map((item, index) =>{
                        return <div key={index} className="flex items-center justify-center  bg-gray-800 w-[200px] aspect-square rounded-lg border border-neutral-500">
                            <div className="flex flex-col items-center gap-4 text-center">
                            <img src={item.image} alt="partner" width={90} height={90} />
                            <p className="uppercase">{item.name}</p>
                            </div>
                        </div>
                    })}
                </div>  
            </div>
        </div>
    )
}
export const partners = [
    {
        name:'bitbank',
        image:'/gravityteam/assets/bitbank.webp',
     },
     {
        name:'bitstamp',
        image:'/gravityteam/assets/bitstamp.webp',
     },
     {
        name:'coinbase',
        image:'/gravityteam/assets/coinbase.webp',
     },
     {
        name:'bitfinex',
        image:'/gravityteam/assets/bitfinex.webp',
     },
     {
        name:'binance',
        image:'/gravityteam/assets/binance.webp',
     },
     {
        name:'valr',
        image:'/gravityteam/assets/valr.webp',
     },
     {
        name:'bitso',
        image:'/gravityteam/assets/bitso.webp',
     },
     {
        name:'cryptocom',
        image:'/gravityteam/assets/cryptocom.webp',
     },
]