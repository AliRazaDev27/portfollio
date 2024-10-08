import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/lib/data'

function Footer() {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
<div className='w-full absolute left-0  -bottom-72 min-h-96'>
    <img
    src="/footer-grid.svg"
    alt="grid"
    className='w-full h-full opacity-50 '
    />
</div>
<div className='flex flex-col items-center'>
    <h1 className='heading lg:max-w-[45vw]'>Ready to take <span className='text-purple'>your</span> digital presence to next level</h1>
    <p className='text-white-200 md:mt-10 my-5  text-center'>Reach out to me today and lets discuss how i can help you achieve your goals</p>
    <a href="mailto:alirazadev27@gmail.com">
        <MagicButton
        title="Let's get in touch"
        icon={<FaLocationArrow/>}
        position="right"
        />
    </a>
</div>
<div className='flex mt-16 gap-2 md:flex-row flex-col justify-between items-center'>
    <p className='text-sm md:text-base md:font-normal font-light'>Copyright &#169; 2022. All rights reserved</p>
    <div className='flex items-center md:gap-3 gap-6'>
        {socialMedia.map((item, index) => (
            <div key={index} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75  bg-black-200 rounded-lg border border-black-300'>
                <img src={item.img} alt={item.id.toString()} width={20} height={20} />
            </div>
        ))}
    </div>
</div>

    </footer>
  )
}

export default Footer