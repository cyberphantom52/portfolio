import React from 'react'

const Opener = ({
  rotate
}:{
  rotate: boolean
}) => {
  return (
    <div className={`${rotate ? "rotate-0" : "rotate-180"} w-1/2 h-full flex place-content-end`}>
      <div className='animate-slideout-0 absolute w-[40%] h-full z-[5] bg-[#ee5f29]'></div>
      <div className='animate-slideout-1 absolute w-[40%] h-full z-[4] bg-white'></div>
      <div className='animate-slideout-2 absolute w-[40%] h-full z-[3] bg-[#33856e]'></div>
      <div className='animate-slideout-3 absolute w-[40%] h-full z-[2] bg-[#f0d14b]'></div>
      <div className='animate-slideout-4 absolute w-[40%] h-full z-[1] bg-[#ee5f29] '></div>
      <div className='animate-slideout-5 absolute w-[40%] h-full z-[0] bg-white'></div>
    </div>
  )
}

const Loading = ({
  opening,
} : {
  opening: boolean
}) => {
  return (
    <div className='flex w-full h-full'>
      <Opener rotate={opening}/>
      <Opener rotate={!opening}/>
    </div>
  )
}

export default Loading