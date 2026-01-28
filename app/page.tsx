import Navbar from "@/components/Navbar";
import CountdownTimer from "@/components/CountdownTimer";
import About from "@/components/About";
import { Time } from "@/components/Time";
import Organize from "@/components/Organize";
import Sponser from "@/components/Sponser";
import Prize from "@/components/Prize";
import Domain from "@/components/Domain";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Orb  from "@/components/Orb";
import { Orbitron, Space_Mono } from "next/font/google";
import { AuroraText } from "@/components/ui/aurora-text";
import { ConfettiFireworks } from "@/components/Confetii";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <>
    <div className="mt-4 mb-0  fixed top-0 left-0 w-full z-50">
      <div className="mb-5">
    <Navbar /></div>
    </div>

     <section
  id="hero"
  className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black"
>
  {/* ORB BACKGROUND */}
  <div className="absolute inset-0 flex items-center justify-center mt-6 scale-[1.25]">
  <Orb
    radius={560}          
    glow={1.4}            
    hue={0}
    hoverIntensity={2.8}
    rotateOnHover
    forceHoverState={false}
  />
</div>


  
  <div className="relative z-10 flex flex-col items-center justify-center text-center text-white">

  
  <div
    className={`mb-6 rounded-full bg-cyan-400/10 px-5 py-1 text-xs tracking-widest mt-6 text-cyan-300  ${spaceMono.className}`}
  >
    GHRCE PRESENTS
  </div>

  
  <h1
    className={`text-[4rem] md:text-[7rem] font-extrabold leading-none ${orbitron.className}`}
  >
    <span className="block text-white">
      HACK
    </span>

    {/* <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]">
      GHRCE
    </span> */}
    <span className="block text-white mt-2">
      <AuroraText>GHRCE</AuroraText> 
    </span>
  </h1>

 
  <p
    className={`mt-6 text-xs md:text-sm tracking-[0.35em] text-gray-400 ${spaceMono.className}`}
  >
    THE CONVERGENCE OF INNOVATION
  </p>

 
  <p
    className={`mt-4 text-sm md:text-base text-cyan-300 ${spaceMono.className}`}
  >
    National Level Hackathon · 2026
  </p>
  <ConfettiFireworks />

  {/* COUNTDOWN */}
  <div className="mt-0.5">
    <CountdownTimer />
  </div>
</div>


</section>


      
      <section className="min-h-screen pt-40 bg-black " id="about">
        <About />
      </section>
      <section className="min-h-screen bg-black">
      <Organize />
      </section>
      <section className="min-h-screen bg-black">
        <Time />
      </section>
      <section className="min-h-screen bg-black ">
       <Sponser />
      </section>
      <section className="min-h-screen bg-black">
        <Prize />
      </section>
      <section className="min-h-screen bg-black">
        <Domain />
      </section>
      <section className="min-h-screen bg-black" >
        <Faq />
      </section>
      <Footer />
    </>
  );
}
