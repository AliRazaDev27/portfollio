"use client"
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/lib/data'
const classes = [
  "md:col-span-4  md:row-span-4 bg-red-500",
  "md:col-span-2 lg:col-span-3 md:row-span-2 bg-blue-500",
  "md:col-span-2 lg:col-span-3 md:row-span-2 bg-green-500",
  "md:col-span-3 md:row-span-1 bg-yellow-500",
  "md:col-span-3 md:row-span-2 bg-orange-500",
  "md:col-span-3 md:row-span-1 bg-pink-500",
]
 export default function Grid() {
  return (
    <section id="#about">

<BentoGrid className='w-full py-20'>
{gridItems.map((item,i) => (
  <BentoGridItem
    id={item.id}
    key={i}
    title={item.title}
    description={item.description}
    className={item.className}
    img={item.img}
    imgClassName={item.imgClassName}
    titleClassName={item.titleClassName}
    spareImg={item.spareImg}
  />
))}
</BentoGrid>
    </section>
  )
}

