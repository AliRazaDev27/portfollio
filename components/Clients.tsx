import { companies, testimonials } from "@/lib/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { div } from "three/webgpu";

export function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from 
        <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        />
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company,index) => (
                <div key={index} className="flex md:max-w-60 max-w-32 gap-2">
<img src={company.img} alt={company.name} className="w-5 md:w-10" />
<img src={company.nameImg} alt={company.name} className="w-20 md:w-24" />

                </div>
            ))}
        </div>
        </div>
        </div>
  )
}