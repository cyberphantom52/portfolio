import React from 'react'
import PageOpener from './PageOpener';
import Link from 'next/link';

const HeroBanner = () => {
  return (
    <div className='relative flex h-full bg-accent'>
      <div className='flex flex-col h-full w-[9.40%] pr-[0.82%]'>
        <div className='bg-[#f0d14b] h-1/2 w-full' />
        <div className='flex h-1/2 w-full'>
          <div className='bg-text h-full w-1/12 self-end mr-[8%]' />
          <div className='bg-text h-full w-1/6 self-end' />
          <div className='bg-[#33856e] h-full w-1/4 self-end' />
        </div>
      </div>
      <div className='flex bg-[#33856e] h-full w-[24%] place-content-end relative'>
        <Link href="/about" className='flex w-full h-full absolute'>
          <span className='text-black self-end mb-[5%] ml-[3%] text-sm'> PROJECTS </span>
        </Link>
        <div
          className='bg-[#f0d14b] h-full w-[18%] self-end'
          style=
          {
            {
              clipPath: 'polygon(0 100%, 0 90%, 35% 90%, 35% 84%, 83.66% 84%, 83.66% 0, 100% 0, 100% 100%)'
            }
          }
        />
      </div>
      <div className='flex h-full w-[3.4%] ps-[1.7%]'>
        <div className='bg-white h-full w-[15%]' />
        <div className='bg-[#33856e] h-full w-[50%]' />
        <div className='bg-white h-full w-[35%]' />
      </div>
      <Link href="/about" className='w-[11.3%] h-full ps-[3.9%] flex flex-col'>
        <Link href="/about" className='bg-[#f0d14b] w-full h-[80%] flex'>
          <span className='text-black mb-[10%] ml-[10%] self-end text-sm w-full'> HORZ </span>
        </Link>
        <span className='text-black mt-[10%] mr-[10%] text-sm vertical-writing-rl'> VERT </span>
      </Link>
      <div className='h-full w-[5.6%]' />
      <PageOpener className='absolute bg-[#f0d14b] h-full w-[5.6%] left-1/2 -translate-x-1/2' />
      <Link href="/about" className='relative w-[17.6%] h-full'>
        <div className='absolute w-1/4 aspect-[3/1] left-1/4'
          style={
            {
              background: 'linear-gradient(90deg, #ffffff 50%, #33856e 50%)'
            }
          }
        />
        <span className='absolute text-black text-sm vertical-writing-lr mt-[38%] left-3/4 pr-[2%] -translate-x-full'> VERT </span>
        <Link
          href="/about"
          className='absolute w-3/4 h-[27.2%] flex top-full -translate-y-full'
          style={
            {
              background: 'linear-gradient(180deg, #f0d14b 1.5%,  rgba(240, 209, 75,  0) 1.5%),  \
                             linear-gradient(180deg, #33856e 13.5%, rgba(51,  133, 110, 0) 13.5%), \
                             linear-gradient(180deg, #f0d14b 15%,   rgba(240, 209, 75,  0) 15%),   \
                             linear-gradient(180deg, #ffffff 20%,   rgba(255, 255, 255, 0) 20%),   \
                             linear-gradient(180deg, #33856e 20%,   #33856e 20%)',
            }
          }
        >
          <span className='text-black text-sm ml-[5%] mt-[17%]'>DIS</span>
        </Link>
        <Link
          href="/about"
          className='absolute flex bg-white h-full w-1/2 left-1/2 justify-end'
          style=
          {
            {
              clipPath: 'polygon(100% 100%, 100% 0, 0 0, 0 16.66%, 50% 16.66%, 50% 100%)'
            }
          }
        >
          <span className='text-black text-sm vertical-writing-rl mr-[4%] mt-[8%]'> VERT </span>
        </Link>
      </Link>
      <div className='flex flex-col w-[16.6%] h-full justify-between'>
        <div className='flex w-[72.28%] h-[26%]'>
          <Link href="/about" className='flex h-full bg-[#f0d14b] w-[80%] justify-end'>
            <span className='text-black text-sm vertical-writing-lr mr-[4%] mt-[4%]'>VERT</span>
          </Link>
          <div className='h-full bg-[#33856e] w-[12%]' />
          <div className='h-full bg-white w-[8%]' />
        </div>
        <div
          className='w-full h-[12.43%]'
          style={
            {
              background: 'linear-gradient(180deg, #ffffff 9%,    rgba(255, 255, 255, 0) 9%),   \
                           linear-gradient(180deg, #ee5f2b 12.8%, rgba(238, 95,  43,  0) 12.8%),\
                           linear-gradient(180deg, #33856e 26.2%, rgba(51,  133, 110, 0) 26.2%),\
                           linear-gradient(180deg, #f0d14b 65.7%, rgba(240, 209, 75,  0) 65.7%),\
                           linear-gradient(180deg, #ee5f2b 72%,   rgba(238, 95,  43,  0) 72%),  \
                           linear-gradient(180deg, #ffffff 81%,   rgba(255, 255, 255, 0) 81%),  \
                           linear-gradient(180deg, #ee5f2b 89.1%, rgba(238, 95,  43,  0) 89.1%),\
                           linear-gradient(180deg, #f0d14b 100%,  rgba(240, 209, 75,  0) 100%)' ,
            }
          }
        />
      </div>
      <div className='flex flex-col w-[14%] h-full justify-end'>
        <div className='flex w-full h-[14.5%] self-end justify-between'>
          <div className='relative flex w-1/2 h-full'>
            <div className='absolute w-1/2 aspect-[2/1] top-full -translate-x-1/2 -translate-y-full'
              style={
                {
                  background: 'linear-gradient(90deg, #f0d14b 50%, #ffffff 50%)'
                }
              }
            />
          </div>
          <div className='w-1/2 h-full bg-[#f0d14b]' />
        </div>
        <Link href="/about" className='flex w-full h-[43%] bg-[#f0d14b] self-end'>
          <span className='text-black text-sm mt-[4%] ml-[4%]'>VERT</span>
        </Link>
        <div className='bg-white w-full h-[8.3%]' />
      </div>
    </div >
  )
}

export default HeroBanner