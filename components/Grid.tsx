"use client"
import { Suspense } from 'react'

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/lib/data'

 export default function Grid() {
  return (
    <section id="#about">
<Suspense>
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
</Suspense>

    </section>
  )
}

