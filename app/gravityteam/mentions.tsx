
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
export function Mentions() {
    return(
        <div className="pt-[20vh]">
            <div className="max-w-[800px] mx-auto pb-16 text-center space-y-4">
                <h1 className="text-6xl">We are in a good company</h1>
                <p className="max-w-[600px] mx-auto text-xl  font-light">Our partnerships have delivered great value to our projects and we’re happy to share some of their feedback below</p>
            </div>
            
            
            <Carousel className="w-full px-4 mt-16  max-w-2xl mx-auto">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <div className="text-center">
              <p className="text-gradient text-3xl cursor-pointer select-none">{item.text}</p>
              <p className="text-xl mt-8">{item.author}</p>
              <p className="text-md font-light">{item.role}</p>
              <p className="text-2xl mt-4 font-semibold">{item.company}</p>  
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious  className="bg-gradient text-black top-0 -translate-y-[150%] left-1/2 -translate-x-[120%] size-14"/>
      <CarouselNext className="bg-gradient  text-black top-0 -translate-y-[150%] right-1/2 translate-x-[120%] size-14" />
    </Carousel>
        </div>
    )
}
const data = [
    {
        text:"Gravity Team is a key partner for Bitso, and their professionalism has been instrumental in deploying our liquidity strategy and expansion ambitions across Latin America. Gravity Team’s vast market expertise and flexibility to support our business requirements in lightning speed have permitted us to catch up with our product debt, list new tokens in record time, and offer attractive spreads for our end users. We are grateful to partner with Gravity Team and excited to continue working together in making crypto useful.",
        author:"Alberto Sánchez Tello",
        role:"Head of Markets of Bitso",
        company:"Bitso",
    },
    {
        text:"Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.",
        author:"Atthakrit Chimplapibul",
        role:"Co-founder & CEO of Bitkub",
        company:"Bitkub",
    },
    {
        text:"Gravity Team has been a supportive partner that has provided many opportunities to our business at an early stage of growth, be it in financing, networking, or marketing. We are extremely happy with our choice of Gravity as a business partner and can highly recommend to other crypto projects.",
        author:"Szymon Jankowski",
        role:"CEO of HashUp",
        company:"Hashup",
        
    },
]