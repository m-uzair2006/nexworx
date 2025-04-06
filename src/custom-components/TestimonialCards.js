import React from 'react'
import Image from 'next/image'
export default function TestimonialCards({title,heading,src,name,position}) {

    return (
        <div className=' mx-4 h-[400px] text-white w-[300px] rounded-xl bg-[#170F49] px-5 py-6'>
           <div className=' w-full flex items-center justify-center'>
           <Image  src={src} height={70} width={70} alt='process-icon'  />
           </div>
            <h1 className=' font-secondary text-2xl font-extrabold py-2'>{title}</h1>
            <h1 className=' font-secondary text-sm mt-5 font-light'>{heading}</h1>
            <h1 className=' font-secondary text-sm mt-5 font-light'>{name}</h1>
            <h1 className=' font-secondary text-sm mt-1 font-light'>{position}</h1>
        </div>
    )
}
