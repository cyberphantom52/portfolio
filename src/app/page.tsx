"use client";
import HeroBanner from "./components/HeroBanner"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className='flex w-screen bg-background justify-center'>
      <motion.div className="flex flex-col w-3/4 h-3/4 self-center"
        initial={{ rotate: 90, scale: 5 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 5 }}
        transition={{ duration: 1.66, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className='duration-500 transition-{text} text-text font-bold text-lg sm:text-4xl md:text-5xl lg:text-7xl'>CYBER</span>
        <HeroBanner />
        <div className="flex justify-between">
          <span className='transition-{text} duration-500 text-[#4c4f48] font-bold text-lg sm:text-3xl lg:text-4xl self-center'>Will You Find Out?</span>
          <span className='transition-{text} duration-500  text-accent font-bold text-lg sm:text-4xl md:text-5xl lg:text-7xl'>PHANTOM</span>
        </div>
      </motion.div>
    </main>
  )
}
