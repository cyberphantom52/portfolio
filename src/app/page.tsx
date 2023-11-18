export default function Home() {
  return (
    <main className='flex w-screen bg-background justify-center transition-{text} duration-500 sm:text-5xl md:text-6xl lg:text-8xl text-text'>
      <div className="flex flex-col w-3/4 h-3/4 self-center">
        <span className='font-bold'>CYBER</span>
        <div className='flex h-full bg-accent'>
          <div className='flex flex-col h-full w-1/12 mr-2'>
            <div className='bg-[#f0d14b] h-1/2 w-full'></div>
            <div className='flex h-1/2 w-full'>
              <div className='bg-text h-full w-1/12 self-end mr-2'></div>
              <div className='bg-text h-full w-1/6 self-end'></div>
              <div className='bg-[#33856e] h-full w-1/4 self-end'></div>
            </div>
          </div>
          <div className='bg-[#33856e] h-full w-1/4'></div>
        </div>
        <div className="flex justify-between">
          <span className='transition-{text} duration-500 font-bold text-[#4c4f48] text-xs md:text-3xl lg:text-3xl self-center'>Will You Find Out?</span>
          <span className='font-bold text-accent'>PHANTOM</span>
        </div>
      </div>
    </main>
  )
}
