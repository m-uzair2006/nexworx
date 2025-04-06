import React from 'react'
import Image from 'next/image'
import { MailIcon } from 'lucide-react'
import { PhoneCallIcon } from 'lucide-react'
import { LocateIcon } from 'lucide-react'
export default function Footer() {
  return (
    <div className=' w-full h-[400px] max-[872px]:h-fit max-[872px]:py-4  flex flex-col items-center justify-evenly  bg-gradient-to-b from-[#000000]  border-t-[1px] border-[#27272a]  via-[#030105] to-[#2A0337]'>
       <div className=' w-full flex items-start pt-20 justify-evenly max-[872px]:flex-col max-[872px]:pb-4  '>
       <div  className=' flex flex-col items-start justify-center gap-8 max-[872px]:w-full max-[872px]:items-center' >
            <Image src='/assets/images/nexworx-logo.png' height={200} width={170} alt='logo' />
            <p className=' text-[#56516E] text-sm font-secondary '>Team augmentation agency you can <br/> trust on</p>
            <div className=' flex items-center justify-start gap-5'>
            <Image className=' hover:cursor-pointer hover:opacity-80 transition-all duration-300' src='/assets/icons/Facebook.png' height={10} width={12} alt='logo' />
            <Image className=' hover:cursor-pointer hover:opacity-80 transition-all duration-300'  src='/assets/icons/YouTube.png' height={10} width={25} alt='logo' />
            <Image className=' hover:cursor-pointer hover:opacity-80 transition-all duration-300'  src='/assets/icons/Instagram.png' height={10} width={20} alt='logo' />
            <Image className=' hover:cursor-pointer hover:opacity-80 transition-all duration-300'  src='/assets/icons/Group 73.png' height={10} width={20} alt='logo' />
            </div>
        </div>
        <div className=' flex flex-col gap-3 text-[#56516E] items-start justify-center max-[872px]:w-full max-[872px]:items-center'>
            <p className=' text-lg text-white font-secondary'>Products</p>
            <p className=' hover:cursor-pointer hover:underline text-sm mt-4 max-[872px]:mt-0 font-secondary'>Features</p>
            <p className=' hover:cursor-pointer hover:underline  text-sm font-secondary'>Pricing</p>
            <p className=' hover:cursor-pointer hover:underline max-[872px]:mb-4  text-sm font-secondary'>Updates</p>

        </div>
        <div className=' flex flex-col gap-3 text-[#56516E] items-start justify-center max-[872px]:w-full max-[872px]:items-center'>
            <p className=' text-lg text-white font-secondary'>Company</p>
            <p className=' hover:cursor-pointer hover:underline  text-sm mt-4 max-[872px]:mt-0  font-secondary'>About</p>
            <p className='hover:cursor-pointer hover:underline  text-sm font-secondary'>Contact Us</p>
            <p className='hover:cursor-pointer hover:underline  text-sm font-secondary'>Career</p>
            <p className=' hover:cursor-pointer hover:underline max-[872px]:mb-4  text-sm font-secondary'>Blogs</p>

        </div>
        <div className=' flex flex-col gap-3 text-[#56516E] items-start justify-center max-[872px]:w-full max-[872px]:items-center'>
            <p className=' text-lg text-white font-secondary'>Support</p>
            <p className=' hover:cursor-pointer hover:underline  text-sm mt-4 max-[872px]:mt-0  font-secondary'>Getting started</p>
            <p className=' hover:cursor-pointer hover:underline  max-[872px]:mb-4   text-sm font-secondary'>Help center</p>

        </div>
        <div className=' flex flex-col gap-3 text-[#56516E] items-start justify-center max-[872px]:w-full max-[872px]:items-center'>
            <p className=' text-lg text-white font-secondary'>Contact Us</p>
            <div className=' flex items-center justify-start gap-3 '>
                <MailIcon className=' mt-4 text-white max-[872px]:mt-1 ' />
            <p className=' hover:cursor-pointer hover:underline  text-sm mt-4 font-secondary'>hello@nexworx.co</p>
            </div>
            <div className=' flex items-center justify-start gap-3 '>
                <PhoneCallIcon className=' mt-4 text-white' />
            <p className=' hover:cursor-pointer hover:underline  text-sm mt-4 font-secondary'>+971 54 200 4771</p>
            </div>
            <div className=' flex items-center justify-start gap-3 '>
                <LocateIcon className=' mt-4 text-white' />
            <p className=' hover:cursor-pointer hover:underline  text-sm mt-4 font-secondary'>IFZA, Dubai Silicon Oasis <br/>
            Dubai, United Arab Emirates</p>
            </div>
           
        </div>
       </div>
       <div className=' border-t-[1px] border-[#27272a] bg-transparent w-[90%] text-white flex items-center justify-between  px-5 py-2'>
        <p className=' hover:cursor-pointer text-[#56516E]   text-sm mt-4 font-secondary'>Copyright © 2025 nexworx</p>
        <div className=' flex items-center justify-center gap-4'>
        <p className=' hover:cursor-pointer hover:underline text-[#56516E]  text-sm mt-4 font-secondary'>All Rights Reserved | </p>
        <p className=' hover:cursor-pointer hover:underline  text-sm mt-4 font-secondary'>Terms and Conditions | </p>
        <p className=' hover:cursor-pointer hover:underline  text-sm mt-4 font-secondary'>Privacy Policy</p>

        </div>

       </div>

    </div>
  )
}
