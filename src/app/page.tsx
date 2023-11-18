import Image from 'next/image'
import hero from '/public/hero.png'

export default function Home() {
  return (
    <main className='transition-all flex w-screen bg-background text-6xl lg:text-8xl text-text justify-center'>
      <div className="flex flex-col self-center">
        <div className='font-bold'>CYBER</div>
        <Image
          src={hero}
          alt="Hero"
        />
        <div className='font-bold text-accent self-end'>PHANTOM</div>
      </div>
    </main>
  )
}
