import HeroBanner from "./components/HeroBanner"

export default function Home() {
  return (
    <main className='flex w-screen bg-background justify-center transition-{text} duration-500 sm:text-5xl md:text-6xl lg:text-8xl text-text'>
      <div className="flex flex-col w-3/4 h-3/4 self-center">
        <span className='font-bold'>CYBER</span>
        <HeroBanner />
        <div className="flex justify-between">
          <span className='transition-{text} duration-500 font-bold text-[#4c4f48] text-xs md:text-3xl lg:text-3xl self-center'>Will You Find Out?</span>
          <span className='font-bold text-accent'>PHANTOM</span>
        </div>
      </div>
    </main>
  )
}
