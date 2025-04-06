import React from 'react'
import Statcards from '@/custom-components/Statcards'
export default function Stats() {
    const data = [
        {numbers:'70+',title:'Experts',heading1:'55+ in-house',heading2:'15+ vetted-contracts'},
        {numbers:'9',title:'Years',heading1:'in business'},
        {numbers:'90+',title:'Projects',heading1:'end-to-end dedicated team'},
        {numbers:'35+',title:'Engagements',heading1:'helped in-house teams to accelerate'},
    ]
  return (
    <div id='stats' className=' max-[1392px]:h-fit max-[1392px]:pb-20  w-full h-[100vh] bg-gradient-to-b from-[#000000] via-[#030105] to-[#2A0337]'>
        <h1 className=' px-4 pt-20 text-6xl  text-[#D2B9FE] font-primary text-center'>Focused growth</h1>
        <h1 className=' px-5 mt-10 text-7xl  text-white font-primary font-bold text-center'>Excellence in Strategic Talent Solutions</h1>
        <div className=' w-full flex flex-wrap mt-20 px-8 items-center justify-evenly max-[1392px]:gap-8 '>
            {
                data.map((item)=>{
                    return(
                        <Statcards key={item.title} {...item}  />
                    )
                })
            }

        </div>

    </div>
  )
}
