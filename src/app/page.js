import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Process from "@/sections/Process";
import Whyus from "@/sections/Whyus";
import Testimonials from "@/custom-components/Testimonials";
import Faq from "@/sections/Faq";
import Footer from "@/custom-components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats/>
      <Process/>
      <Whyus/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </>
  );
}
