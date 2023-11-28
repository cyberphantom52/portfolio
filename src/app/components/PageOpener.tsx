"use client";
import React from 'react'
import { motion } from 'framer-motion'

const ease = [.52, .28, .46, .99]
const container = {
  animate: {
    width: '0%',
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      staggerDirection: -1,
      ease: ease
    }
  },
  exit: {
    width: '50%',
    transition: {
      duration: 1,
      staggerChildren: 0.1,
      ease: ease
    }
  }
}

const item = {
  animate: {
    x: '0%',
    transition: {
      duration: 0.66,
      ease: ease
    }
  },
  exit: {
    x: '150%',
    transition: {
      duration: 0.66,
      ease: ease
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

type Props = {
  className?: string
}
const PageOpener: React.FC<Props> = (props) => {
  return (
    <motion.div className={`${props.className} flex justify-center z-10`}
      initial={{ width: '50%' }}
      animate={{ width: '5.6%' }}
      exit={{ width: '50%' }}
      transition={{ duration: 1.66, ease: ease }}
    >
      <Opener invert={false} />
      <Opener invert={true} />
    </motion.div>
  )
}

export default PageOpener