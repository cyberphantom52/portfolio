import React from 'react'
import PageOpener from './PageOpener';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='flex h-full bg-primary relative justify-between font-semibold text-black'>
      {/* Left Half */}
      <div className='w-[47.5%] flex'>
        {/* First */}
        <div className='w-[18%] mr-[1.7%]'>
          <div className='h-1/2 w-full bg-accent' />
          <div className='flex h-1/2 w-1/2'>
            <div className='bg-text w-[10.6%]' />
            <div className='bg-text w-[25.5%] ml-[21.3%]' />
            <div className='bg-secondary w-[42.6%]' />
          </div>
        </div>
        {/* Second */}
        <div className='h-full w-1/2 relative overflow-hidden'>
          <Link href='/about' className='bg-secondary h-full w-full absolute'>
            <span className='bottom-[7.5%] left-[5%] absolute'>PROJECTS</span>
          </Link>
          <div className='bg-accent h-full w-[18%] absolute left-full -translate-x-full'
            style={{ clipPath: 'polygon(0 100%, 0 90%, 35% 90%, 35% 84%, 83.66% 84%, 83.66% 0, 100% 0, 100% 100%)' }}
          />
        </div>
        {/* Third */}
        <div className='h-full w-[8%] ps-[4%]'
          style={{
            background: 'linear-gradient(90deg, var(--primary)   50%, rgba(0, 0, 0, 0) 50%),\
                         linear-gradient(90deg, var(--text)      60%, rgba(0, 0, 0, 0) 60%),\
                         linear-gradient(90deg, var(--secondary) 85%, var(--text)      85%)'
          }}
        />
        {/* Fourth */}
        <div className='h-full w-[22%] overflow-hidden relative'>
          <Link href="/abouts" className='h-full w-full absolute'>
            <span className='top-[82%] left-[95%] absolute -translate-x-full vertical-writing-lr'>ABOUT</span>
          </Link>
          <Link href="/blogs" className='absolute bg-accent w-2/3 h-4/5 left-full -translate-x-full'>
            <span className='bottom-[7.5%] left-[5%] absolute'>BLOGS</span>
          </Link>
        </div>
      </div>
      {/* Page Opener */}
      <PageOpener className='absolute w-[5%] bg-accent left-1/2 z-[10] h-full -translate-x-1/2' />
      {/* Right Half */}
      <div className='w-[47.2%] flex'>
        {/* First */}
        <div className='h-full w-[37%] flex flex-col justify-between relative overflow-hidden'>
          <div className='w-[29%] aspect-[11/3] self-center -translate-x-1/2'
            style={{ background: 'linear-gradient(90deg, var(--text) 50%, var(--secondary) 50%)' }}
          />
          <Link href="/about" className='w-3/4 h-[27%] relative'
            style={{
              background: 'linear-gradient(180deg, var(--accent)    3%,  rgba(0, 0, 0, 0) 3%),  \
                           linear-gradient(180deg, var(--secondary) 12%, rgba(0, 0, 0, 0) 12%), \
                           linear-gradient(180deg, var(--accent)    15%, rgba(0, 0, 0, 0) 15%), \
                           linear-gradient(180deg, var(--text)      21%, var(--secondary) 21%)'
            }}
          >
            <span className='top-[27%] left-[5%] absolute'>RESUME</span>
          </Link>
          <Link href="/about" className='absolute bg-text h-full w-1/2 left-1/2'
            style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 0, 0 16.66%, 50% 16.66%, 50% 100%)' }}
          >
            <span className='absolute left-[95%] top-[2%] -translate-x-full vertical-writing-rl'>SKILLS</span>
          </Link>
        </div>
        {/* Second */}
        <div className='h-full w-[35%] flex flex-col justify-between'>
          <div className='flex w-[72%] h-[26%]'>
            <Link href="/about" className='relative h-full bg-accent w-[80%] overflow-hidden'>
              <span className='top-[5%] left-[95%] -translate-x-full absolute vertical-writing-rl'>VzvNnW</span>
            </Link>
            <div className='h-full bg-secondary w-[12%]' />
            <div className='h-full bg-text w-[8%]' />
          </div>
          <div className='w-full h-[13%]'
            style={{
              background: 'linear-gradient(180deg, var(--text)      9%,    rgba(0, 0, 0, 0) 9%),   \
                           linear-gradient(180deg, var(--primary)   12.8%, rgba(0, 0, 0, 0) 12.8%),\
                           linear-gradient(180deg, var(--secondary) 26.2%, rgba(0, 0, 0, 0) 26.2%),\
                           linear-gradient(180deg, var(--accent)    65.7%, rgba(0, 0, 0, 0) 65.7%),\
                           linear-gradient(180deg, var(--primary)   72%,   rgba(0, 0, 0, 0) 72%),  \
                           linear-gradient(180deg, var(--text)      81%,   rgba(0, 0, 0, 0) 81%),  \
                           linear-gradient(180deg, var(--primary)   89.1%, var(--accent)    89.1%)'
            }}
          />
        </div>
        {/* Third */}
        <div className='h-full w-[28%] relative flex'>
          <div className='absolute w-1/4 aspect-[2/1] bottom-[50.5%] -translate-x-1/2 z-10'
            style={{ background: 'linear-gradient(90deg, var(--accent) 50%, var(--text) 50%)' }}
          />
          {/* Don't have anythig to link to here yet. */}
          {/* <Link href="/about" className='w-full h-1/2 absolute'>
            <span className='absolute top-[5%] left-[95%] -translate-x-full vertical-writing-lr'>VERT</span>
          </Link> */}
          <div className='h-[65%] w-full self-end flex flex-col bg-text relative'
            style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 22%, 50% 22%, 50% 0)' }}
          >
            <Link href="/about" className='h-[88%] w-full bg-accent relative'>
              <span className='absolute top-[28%] left-[5%]'>EXPERIENCE</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HeroBanner