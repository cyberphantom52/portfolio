import React from 'react'
import PageOpener from './PageOpener';

const HeroBanner = () => {
  return (
    <div className='flex h-full bg-accent relative justify-between'>
      {/* Left Half */}
      <div className='w-[47.5%] flex'>
        {/* First */}
        <div className='w-[18%] mr-[1.7%]'>
          <div className='h-1/2 w-full bg-[#f0d14b]' />
          <div className='flex h-1/2 w-1/2'>
            <div className='bg-text w-[10.6%]' />
            <div className='bg-text w-[25.5%] ml-[21.3%]' />
            <div className='bg-[#33856e] w-[42.6%]' />
          </div>
        </div>
        {/* Second */}
        <div className='h-full w-1/2 bg-[#33856e] flex place-content-end'>
          <div className='bg-[#f0d14b] h-full w-[18%]'
            style={{ clipPath: 'polygon(0 100%, 0 90%, 35% 90%, 35% 84%, 83.66% 84%, 83.66% 0, 100% 0, 100% 100%)' }}
          />
        </div>
        {/* Third */}
        <div className='h-full w-[8%] text-sm ps-[4%]'
          style={{
            background: 'linear-gradient(90deg, #ee5f2b 50%, rgba(240, 209, 75,  0) 50%),  \
                         linear-gradient(90deg, #ffffff 60%, rgba(255, 255, 255, 0) 60%),   \
                         linear-gradient(90deg, #33856e 85%, #ffffff 85%)'
          }}
        />
        {/* Fourth */}
        <div className='h-full w-[22%] flex place-content-end'>
          <div className='bg-[#f0d14b] w-2/3 h-4/5' />
        </div>
      </div>
      {/* Page Opener */}
      <PageOpener className='absolute w-[5%] bg-[#f0d14b] left-1/2 z-[10] h-full -translate-x-1/2' />
      {/* Right Half */}
      <div className='w-[47.2%] flex'>
        {/* First */}
        <div className='h-full w-[37%] flex flex-col justify-between relative'>
          <div className='w-[29%] aspect-[11/3] self-center -translate-x-1/2'
            style={{ background: 'linear-gradient(90deg, #ffffff 50%, #33856e 50%)' }}
          />
          <div className='w-3/4 h-[27%]'
            style={{
              background: 'linear-gradient(180deg, #f0d14b 3%,  rgba(240, 209, 75,  0) 3%),  \
                           linear-gradient(180deg, #33856e 12%, rgba(51,  133, 110, 0) 12%), \
                           linear-gradient(180deg, #f0d14b 15%,   rgba(240, 209, 75,  0) 15%),   \
                           linear-gradient(180deg, #ffffff 21%,   #33856e 21%)'
            }}
          />
          <div className='absolute bg-text h-full w-1/2 left-1/2'
            style={{ clipPath: 'polygon(100% 100%, 100% 0, 0 0, 0 16.66%, 50% 16.66%, 50% 100%)' }}
          />
        </div>
        {/* Second */}
        <div className='h-full w-[35%] flex flex-col justify-between'>
          <div className='flex w-[72%] h-[26%]'>
            <div className='h-full bg-[#f0d14b] w-[80%]' />
            <div className='h-full bg-[#33856e] w-[12%]' />
            <div className='h-full bg-white w-[8%]' />
          </div>
          <div className='w-full h-[13%]'
            style={{
              background: 'linear-gradient(180deg, #ffffff 9%,    rgba(255, 255, 255, 0) 9%),   \
                           linear-gradient(180deg, #ee5f2b 12.8%, rgba(238, 95,  43,  0) 12.8%),\
                           linear-gradient(180deg, #33856e 26.2%, rgba(51,  133, 110, 0) 26.2%),\
                           linear-gradient(180deg, #f0d14b 65.7%, rgba(240, 209, 75,  0) 65.7%),\
                           linear-gradient(180deg, #ee5f2b 72%,   rgba(238, 95,  43,  0) 72%),  \
                           linear-gradient(180deg, #ffffff 81%,   rgba(255, 255, 255, 0) 81%),  \
                           linear-gradient(180deg, #ee5f2b 89.1%, #f0d14b 89.1%)'
            }}
          />
        </div>
        {/* Third */}
        <div className='h-full w-[28%] flex flex-col justify-end'>
          <div className='flex w-full h-[14.5%] self-end justify-between'>
            <div className='relative flex w-1/2 h-full'>
              <div className='absolute w-1/2 aspect-[2/1] top-full -translate-x-1/2 -translate-y-full'
                style={{ background: 'linear-gradient(90deg, #f0d14b 50%, #ffffff 50%)' }}
              />
            </div>
            <div className='w-1/2 h-full bg-[#f0d14b]' />
          </div>
          <div className='w-full h-[43%] bg-[#f0d14b] self-end' />
          <div className='bg-white w-full h-[8.3%]' />
        </div>
      </div>
    </div >
  )
}

export default HeroBanner