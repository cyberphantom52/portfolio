"use client";
import HeroBanner from "./components/HeroBanner"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className='flex w-screen bg-background justify-center text-text sm:text-5xl md:text-6xl lg:text-8xl font-bold'>
      <motion.div className="flex flex-col w-3/4 h-3/4 self-center"
        initial={{ rotate: 90, scale: 5 }}
        animate={{ rotate: 0, scale: 1 }}
        exit={{ rotate: 90, scale: 5 }}
        transition={{ duration: 1.66, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className='duration-500 transition-{text}'>CYBER</span>
        <HeroBanner />
        <div className="flex justify-between">
          <span className='transition-{text} duration-500 text-[#4c4f48] text-xs md:text-3xl lg:text-3xl self-center'>Will You Find Out?</span>
          <span className='transition-{text} duration-500  text-accent'>PHANTOM</span>
        </div>
      </motion.div>
    </main>
  )
}
