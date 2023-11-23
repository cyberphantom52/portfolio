"use client";
import React from 'react'
import { motion } from 'framer-motion'

const Opener = ({
  invert
}: {
  invert: boolean
}) => {
  return (
    <motion.div
      className={`${invert ? "rotate-0" : "rotate-180"} h-full w-0 flex`}
    >
      <motion.div
        className='w-1/6 h-full z-[5] bg-[#ee5f29]'
      />
      <motion.div
        className='w-1/6 h-full z-[4] bg-white'
      />
      <motion.div
        className='w-1/6 h-full z-[3] bg-[#33856e]'
      />
      <motion.div
        className='w-1/6 h-full z-[2] bg-[#f0d14b]'
      />
      <motion.div
        className='w-1/6 h-full z-[1] bg-[#ee5f29]'
      />
      <motion.div
        className='w-1/6 h-full z-[0] bg-white'
      />
    </motion.div>
  )
}

const PageOpener = () => {
  return (
    <div className='flex w-full h-full justify-between'>
      <div className='bg-[#f0d14b] h-[80%] w-full'/>
      <motion.div
        className='z-10 absolute bg-[#f0d14b] h-full w-[5%] ml-[7%]'
        initial={{ marginRight: '-10%', marginLeft: '-10%', width: '33%', backgroundColor: '#33856e'}}
        animate={{ marginRight: '0%',   marginLeft: '7%',   width: '5%',  backgroundColor: '#f0d14b' }}
        exit=   {{ marginRight: '-10%', marginLeft: '-10%', width: '33%', backgroundColor: '#33856e' }}
        transition={{ duration: 1.5, ease: [.06, .69, .51, .97]}}
        >
      </motion.div>
    </div>
  )
}

export default PageOpener