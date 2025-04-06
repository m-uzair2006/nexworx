import React from 'react'
import ProcessCards from '@/custom-components/ProcessCards'
export default function Process() {
    const data = [
        {title:'Day 1-2',heading1:'Define Your Needs',heading2:'Share your project requirements, desired skills, and team dynamics.15+ vetted-contracts'},
        {title:'Day 1-2',heading1:'Match & Select',heading2:'We curate a pool of qualified candidates and help you select the best fit for your needs.'},
        {title:'Day 1-2',heading1:'Collaborate & Grow',heading2:'Work directly with your augmented team, leveraging our support for effective collaboration and performance management.'},
    ]
  return (
    <div className=' max-[1124px]:h-fit max-[1124px]:pb-20  w-full h-[100vh] bg-gradient-to-b from-[#2A0337] via-[#030105] to-[#000000]'>
         <h1 className=' px-4 pt-20 text-6xl  text-[#D2B9FE] font-primary text-center'>Process</h1>
         <h1 className=' px-5 mt-10 text-7xl  text-white font-primary font-bold text-center'>Effortless Hiring, Maximum Impact</h1>
          <div className=' w-full flex flex-wrap mt-20 px-8 items-center justify-center gap-20 max-[1392px]:gap-8 '>
                     {
                         data.map((item)=>{
                             return(
                                 <ProcessCards key={item.heading1} {...item}  />
                             )
                         })
                     }
         
                 </div>

    </div>
  )
}
