'use client'
import React from 'react'
import Navbar from '@/custom-components/Navbar'
import { TextLoop } from '../../components/motion-primitives/text-loop'
import Link from 'next/link'
import Button from '@/custom-components/Button'
import { ArrowDownIcon } from 'lucide-react'
import Image from 'next/image'
export default function Hero() {
    const scrollToSection = () => {
        document.getElementById('stats').scrollIntoView({ behavior: 'smooth' });
      };
    return (
        <div className=' w-full h-[100vh] bg-[#000000] z-[10] relative overflow-x-hidden'>
            <div className=' z-[-1] absolute w-[350px] h-[350px] rounded-full bg-[#4B0082] blur-[150px] top-10 left-[-10%] '></div>
            <div className=' z-[-1] absolute w-[300px] h-[300px] rounded-full bg-[#4B0082] blur-[150px] bottom-60 right-[-10%] '></div>
            <div className=' z-[-1] absolute w-[350px] h-[350px] rounded-full bg-[#4B0082] blur-[180px] right-[40%] top-[30%] '></div>
            <div className=' z-[-1] absolute  bottom-10 right-10 flex items-center justify-center gap-2 '>
                
                <div className=' flex items-center justify-end  gap-2'>
                    
                    <div onClick={scrollToSection} className=' flex p-2 transition-all duration-300 hover:cursor-pointer hover:bg-white/30 items-center border border-[#7A7A7A] bg-white/10 justify-center rounded-full'>
                        <ArrowDownIcon className=' text-white' />
                    </div>
                  
                   <div>
                   <p className=' text-xs font-normal text-white'>Swipe or Scroll down</p>
                   <p className=' text-xs font-normal text-[#7A7A7A]'>To learn more.</p>
                   </div>
                </div>

            </div>
            <Navbar />
            <div className=' max-[1552px]:pl-20 max-[1363px]:pl-10 max-[552px]:pl-2 w-full h-fit flex items-start pl-60 flex-col max-[587px]:gap-2  gap-4 justify-center '>
                <div className=' flex items-center justify-center gap-2'  >
                    <h1 className=' py-3  bg-clip-text text-transparent bg-gradient-to-r from-[#ABC4E8] max-[1363px]:text-8xl max-[1044px]:text-7xl max-[805px]:text-6xl max-[700px]:text-5xl   to-[#E0B3B6] font-primary text-9xl '>Drive growth</h1>
                    <Image className=' max-[587px]:w-[40px]' src='/assets/icons/header1.png' height={50} width={80} alt='header1' />
                </div>
                <div className=' flex items-center justify-center gap-2'  >
                    <Image className=' max-[587px]:w-[40px]'  src='/assets/icons/header2.png' height={100} width={80} alt='header2' />
                    <h1 className=' py-3 bg-clip-text text-transparent bg-gradient-to-r from-[#CFBEEC] max-[1363px]:text-8xl max-[1044px]:text-7xl max-[805px]:text-6xl max-[700px]:text-5xl  to-[#AFDDC3] font-primary text-9xl '>with Impactful</h1>
                </div>
                <div className=' flex items-center justify-center gap-2'  >
                    <Image className=' max-[587px]:w-[40px]'  src='/assets/icons/header3.png' height={100} width={80} alt='header3' />
                   
                    <TextLoop className=' py-3  text-[#bab9d6] max-[587px]:text-wrap font-primary max-[1363px]:text-8xl max-[1044px]:text-7xl max-[805px]:text-6xl max-[700px]:text-5xl  text-9xl ' >
                        <span>Team Augmentation</span>
                        <span>UI/UX specialist</span>
                        <span>DevOps engineer</span>
                        <span>cloud architect</span>
                        <span>fullstack developer</span>
                        
                    </TextLoop>
                </div>
                    <div className='  flex items-center justify-start pr-60 max-[500px]:pr-0'>
                        <Button variant='secondary' title='Book a free Consultation'/>
                        
                    </div>

            </div>

        </div>
    )
}
