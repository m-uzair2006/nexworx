import React from 'react'

export default function Statcards({numbers,title,heading1,heading2}) {
  return (
    <div className=' mx-4 h-[300px] text-white w-[300px] rounded-xl bg-[#170F49] px-3 py-4'>
        <h1 className=' font-primary text-center  text-9xl pb-6'>{numbers}</h1>
        <div className=' w-full h-[1px]  bg-white'></div>
        <h1 className=' font-primary font-medium text-4xl py-5'>{title}</h1>
        <h1 className=' font-secondary text-sm font-normal'>{heading1}</h1>
        <h1 className=' font-secondary text-sm font-normal'>{heading2}</h1>
    </div>
  )
}
