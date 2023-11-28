import React from 'react'
import PageOpener from './PageOpener';

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
      <div className='flex bg-[#33856e] h-full w-[24%] place-content-end'>
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
      <div className='flex h-full w-[7.3%] ps-[1.7%]'>
        <div className='bg-white h-full w-[3.48%]' />
        <div className='bg-[#33856e] h-full w-[16.08%]' />
        <div className='bg-white h-full w-[10.32%]' />
      </div>
      <div className='bg-[#f0d14b] w-[13%] h-[80%]' />
      <PageOpener className='absolute bg-[#f0d14b] h-full w-[5.6%] left-1/2 -translate-x-1/2' />
      <div className='relative w-[17.6%] h-full'>
        <div className='absolute flex flex-col h-full w-[76.5%] justify-between'>
          <div className='w-[33.3%] h-[3.6%] translate-x-[100%]'
            style={
              {
                background: 'linear-gradient(90deg, #ffffff 50%, #33856e 50%)'
              }
            }
          />
          <div
            className='w-full h-[27.2%]'
            style={
              {
                background: 'linear-gradient(180deg, #f0d14b 1.5%,  rgba(240, 209, 75,  0) 1.5%),  \
                             linear-gradient(180deg, #33856e 13.5%, rgba(51,  133, 110, 0) 13.5%), \
                             linear-gradient(180deg, #f0d14b 15%,   rgba(240, 209, 75,  0) 15%),   \
                             linear-gradient(180deg, #ffffff 20%,   rgba(255, 255, 255, 0) 20%),   \
                             linear-gradient(180deg, #33856e 20%,   #33856e 20%)',
              }
            }
          />
        </div>
        <div
          className='bg-white h-full w-1/2 translate-x-[100%]'
          style=
          {
            {
              clipPath: 'polygon(100% 100%, 100% 0, 0 0, 0 16.66%, 50% 16.66%, 50% 100%)'
            }
          }
        />
      </div>
      <div className='flex flex-col w-[16.6%] h-full justify-between'>
        <div className='flex w-[72.28%] h-[26%]'>
          <div className='h-full bg-[#f0d14b] w-[80%]' />
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
            <div className='absolute w-[34%] h-[34%] bg-[#f0d14b] self-end -translate-x-full' />
            <div className='w-[34%] h-[34%] bg-white self-end' />
          </div>
          <div className='w-1/2 h-full bg-[#f0d14b]' />
        </div>
        <div className='w-full h-[43%] bg-[#f0d14b] self-end' />
        <div className='bg-white w-full h-[8.3%]' />
      </div>
    </div >
  )
}

export default HeroBanner