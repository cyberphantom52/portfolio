"use client";
import React from 'react'
import { motion } from 'framer-motion'

const container = {
  animate: {
    width: '0%',
    transition: {
      duration: 1.66,
      ease: [.52, .28, .46, .99],
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  exit: {
    width: '50%',
    transition: {
      duration: 1.66,
      ease: [.52, .28, .46, .99],
      staggerChildren: 0.1
    }
  }
}

const item = {
  animate: {
    x: '0%',
    transition: {
      duration: 0.66,
      ease: [.52, .28, .46, .99]
    }
  },
  exit: {
    x: '150%',
    transition: {
      duration: 0.66,
      ease: [.52, .28, .46, .99]
    }
  }
}

const Opener = ({
  invert
}: {
  invert: boolean
}) => {
  return (
    <motion.div
      className={`${invert ? "rotate-0" : "rotate-180"} relative h-full flex`}
      initial={{ width: '50%' }}
      animate="animate"
      exit="exit"
      variants={container}
    >
      <motion.div
        className='absolute h-full z-[5] bg-[#ee5f29] w-full'
        initial={{ x: '150%' }}
        variants={item}
      />
      <motion.div
        className='absolute h-full z-[4] bg-white w-full'
        initial={{ x: '150%' }}
        variants={item}
      />
      <motion.div
        className='absolute h-full z-[3] bg-[#33856e] w-full'
        initial={{ x: '150%' }}
        variants={item}
      />
      <motion.div
        className='absolute h-full z-[2] bg-[#f0d14b] w-full'
        initial={{ x: '150%' }}
        variants={item}
      />
      <motion.div
        className='absolute h-full z-[1] bg-[#ee5f29] w-full'
        initial={{ x: '150%' }}
        variants={item}
      />
      <motion.div
        className='absolute h-full z-[0] bg-white w-full'
        initial={{ x: '150%' }}
        variants={item}
      />
    </motion.div>
  )
}

const PageOpener = () => {
  return (
    <div className='flex w-full h-full justify-between'>
      <div className='bg-[#f0d14b] h-[80%] w-full' />
      <motion.div
        className='z-10 absolute bg-[#f0d14b] h-full w-[5%] ml-[7%] flex justify-center'
        initial={{ marginRight: '-15%', marginLeft: '-12%', width: '43%' }}
        animate={{ marginRight: '0%', marginLeft: '7%', width: '5%' }}
        exit={{ marginRight: '-15%', marginLeft: '-12%', width: '43%' }}
        transition={{ duration: 1.66, ease: [.52, .28, .46, .99] }}
      >
        <Opener invert={false} />
        <Opener invert={true} />
      </motion.div>
    </div>
  )
}

export default PageOpener