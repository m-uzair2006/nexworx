import React from 'react'
import Image from 'next/image'
export default function ProcessCards({title,heading1,heading2}) {
    return (
        <div className=' mx-4 h-[350px] text-white w-[300px] rounded-xl bg-[#170F49] px-5 py-6'>
           <Image  src='/assets/icons/process-icon.png' height={50} width={50} alt='process-icon'  />
            <h1 className=' font-secondary text-[#8E5CE8] font-medium text-sm py-2'>{title}</h1>
            <h1 className=' font-secondary text-2xl font-bold py-2'>{heading1}</h1>
            <h1 className=' font-secondary text-sm mt-5 font-normal'>{heading2}</h1>
            <div className=' mt-8 bg-[#E9DEFB] w-fit h-fit rounded-full flex items-center justify-center  '>
                <h1 className=' font-secondary text-[#8E5CE8] font-medium text-xs  p-1'>3 Day-Blueprint</h1>

            </div>
        </div>
    )
}
