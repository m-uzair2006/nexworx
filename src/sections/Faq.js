import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Button from '@/custom-components/Button';
export default function


    Faq() {

        const data = [
            {
              question: "1. How is nexworx different from traditional outsourcing?",
              answer: "Unlike traditional outsourcing, our team augmentation model seamlessly integrates with your existing team, maintaining your company culture and workflows while providing expert developers on demand."
            },
            {
              question: "2. What types of developers and expertise does nexworx offer?",
              answer: "We offer a diverse range of specialists, including frontend and full-stack developers, AI engineers, DevOps experts, solution and cloud architects, UI/UX designers, and project managers. Our developers specialize in modern technologies such as React, Node.js, Python, AWS, and GCP."
            },
            {
              question: "3. How quickly can nexworx provide a development team?",
              answer: "We can onboard pre-vetted developers within days, ensuring minimal downtime and a fast integration process."
            },
            {
              question: "4. Can I scale my team up or down as needed?",
              answer: "Yes! Our flexible engagement model allows you to scale your team up or down based on project needs, ensuring cost efficiency and agility."
            },
            {
              question: "5. What industries does nexworx serve?",
              answer: "We work with a wide range of industries, including FinTech, HealthTech, EdTech, SaaS, eCommerce, and enterprise software."
            }
          ];
          
    return (
        <div className=' max-[1124px]:h-fit max-[1124px]:pb-20 flex items-center  flex-col  w-full h-[100vh] px-10 bg-[#000000]'>
            <h1 className=' px-4 pt-20 text-6xl  text-[#D2B9FE] font-primary text-center'>Questions?</h1>
            <h1 className=' px-5 mt-10 text-7xl  text-white font-primary  font-semibold text-center'>Have more questions!</h1>
            <Accordion type="single" collapsible className="w-[60%] text-white mt-20">
            {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className=' py-5 text-2xl font-secondary' >{item.question}</AccordionTrigger>
            <AccordionContent className=' text-sm font-secondary'>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
                
            </Accordion>
            <div className=' mt-10'>
            <Button  variant='primary' title='More questions?Schedule A Call Now...' />

            </div>

        </div>
    )
}
