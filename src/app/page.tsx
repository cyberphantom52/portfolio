export default function Home() {
  return (
    <main className='transition-{text} duration-500  flex w-screen bg-background sm: text-5xl md:text-6xl lg:text-8xl text-text justify-center'>
      <div className="flex flex-col w-3/4 h-3/4 align-middle self-center">
        <div className='font-bold'>CYBER</div>
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
        <div className='font-bold text-accent self-end'>PHANTOM</div>
      </div>
    </main>
  )
}
