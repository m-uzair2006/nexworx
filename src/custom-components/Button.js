import React from 'react'

export default function Button({ title, variant }) {
    if (variant === 'primary') {
        return (
            <button className='bg-[#4B0082] text-white transition-all  font-secondary  text-[14px] font-medium p-3 px-4 rounded-xl hover:brightness-130 hover:cursor-pointer'>
                {title}
            </button>
        )
    }
    if (variant === 'secondary') {
        return (
            <button className='bg-[#D2B9FE] text-[#141414]  duration-500 transition-all font-secondary text-lg font-medium p-3 px-5 rounded-lg  hover:brightness-130 hover:cursor-pointer'>
                {title}
            </button>
        )
    }
    return null;
}
