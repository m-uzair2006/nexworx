import React from 'react'
import WhyUsCards from '@/custom-components/WhyusCards'
export default function Whyus() {
    const data = [
        {src:'/assets/icons/nx-icon2.png',title:'Scalable Workforce Solutions',heading:'Your business needs can shift rapidly, and having the right talent at the right time is crucial. Our flexible team augmentation model allows you to expand or downsize your workforce effortlessly, ensuring you always have the resources needed to meet business demands without long-term commitments.'},
        {src:'/assets/icons/nx-icon3.png',title:'Precision Talent Matching',heading:'Success starts with the right people. We provide access to a handpicked network of highly skilled professionals, ensuring a perfect match for your specific business needs. Our vetting process focuses on technical expertise, cultural fit, and adaptability, so you get professionals who integrate seamlessly into your existing team'},
        {src:'/assets/icons/nx-icon4.png',title:'Accelerated Project Delivery',heading:'Time is money, and delays can be costly. With our ready-to-deploy experts, you eliminate lengthy hiring cycles and reduce onboarding time. This ensures your projects stay on schedule, meet critical deadlines, and drive faster ROI, all without compromising quality.'},
    ]
  return (
    <div className=' max-[1124px]:h-fit max-[1124px]:pb-20  w-full h-[100vh] bg-gradient-to-b from-[#000000] via-[#030105] to-[#2A0337]'>
            <h1 className=' px-4 pt-20 text-6xl  text-[#D2B9FE] font-primary text-center'>Why Nexworx</h1>
            <h1 className=' px-5 mt-10 text-7xl  text-white font-primary font-bold text-center'>Key Benefits</h1>
             <div className=' w-full flex flex-wrap mt-20 px-8 items-center justify-center gap-20 max-[1392px]:gap-8 '>
                        {
                            data.map((item)=>{
                                return(
                                    <WhyUsCards key={item.title} {...item}  />
                                )
                            })
                        }
            
                    </div>
   
       </div>
  )
}
