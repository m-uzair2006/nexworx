import TestimonialCards from "./TestimonialCards"
export default function Testimonials() {
    const data = [
        {src:'/assets/images/customer1.png',title:'Canada – FinTech Industry',heading:" 'Absolute legend of a service! We needed blockchain devs ASAP, and they delivered top-notch talent faster than a Tim Hortons drive-thru. Smooth process, zero fuss!' ",name:'Daniel M.',position:"CTO, Toronto"},
        {src:'/assets/images/customer2.png',title:'Germany – Automotive Tech Industry',heading:" 'Top quality engineers, no nonsense. Our project needed AI specialists, and they fit seamlessly into our team. Efficient, reliable, and 100% professional.' ",name:'Stefan L.',position:"Engineering Manager, Munich"},
        {src:'/assets/images/customer3.png',title:'India – E-commerce & SaaS Industry',heading:" 'Super fast and super effective! Hiring top developers in India is tough, but these guys made it effortless. No time wasted—just results!' ",name:'Priya S.',position:"Project Manager, Bangalore"},
    ]
  return (
    <div className=' max-[1124px]:h-fit max-[1124px]:pb-20  w-full h-[100vh] bg-gradient-to-b from-[#2A0337] via-[#030105] to-[#000000]'>
            <h1 className=' px-4 pt-20 text-6xl  text-[#D2B9FE] font-primary text-center'>Testimonials</h1>
            <h1 className=' px-5 mt-10 text-7xl  text-white font-primary font-bold text-center'>Hear Our customers.</h1>
             <div className=' w-full flex flex-wrap mt-20 px-8 items-center justify-center gap-20 max-[1392px]:gap-8 '>
                        {
                            data.map((item)=>{
                                return(
                                    <TestimonialCards key={item.title} {...item}  />
                                )
                            })
                        }
            
                    </div>
   
       </div>
  )
}
