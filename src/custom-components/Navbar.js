import React from 'react'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Button from './Button'
import { MenuIcon } from 'lucide-react'
export default function Navbar() {
  return (
    <div className=' w-full  flex items-center justify-between px-20  bg-transparent p-6 max-[689px]:px-4'>
      <Image src='/assets/images/nexworx-logo.png' height={150} width={150} alt='logo' />
      <div className=' flex items-center justify-center gap-20 max-[1024px]:gap-2' >
        <div className=' flex items-center justify-center gap-12 max-[1024px]:hidden  '>
          <p className=' text-white font-normal text-sm hover:underline hover:cursor-pointer font-secondary'>About us</p>
          <p className=' text-white font-normal text-sm hover:underline hover:cursor-pointer font-secondary'>Services</p>
          <p className=' text-white font-normal text-sm hover:underline hover:cursor-pointer font-secondary'>Testimonials</p>
        </div>
        <DropdownMenu >
          <DropdownMenuTrigger className=' outline-none ring-none' >

        <MenuIcon className=' text-white hidden max-[1024px]:flex' />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=' mt-4 text-white bg-white/10 backdrop-blur-sm outline-none border-none hover:bg-white/10'>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant='primary' title='Schedule a Call' />
      </div>
    </div>
  )
}
