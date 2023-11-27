import Link from 'next/link'
import React from 'react'

function LeftSidebar({
  className,
}: {
  className?: string
}) {
  return (
    <div className={`${className} flex vertical-writing-lr py-5 z-10 place-content-between place-items-center`}>
      <span className="rotate-180">
        <Link href="/">HOME</Link>
      </span>
      <span className="rotate-180">
        <Link href="/about">W</Link>
      </span>
      <div className="rotate-180">
        <Link href="https://github.com/cyberphantom52/">GitHub</Link>
        <span> . </span>
        <Link href="https://gitlab.com/cyberphantom52/">GitLab</Link>
      </div>
    </div>
  )
}

function RightSidebar({
  className,
}: {
  className?: string
}) {
  return (
    <div className={`${className} flex vertical-writing-lr py-5 z-10 place-content-between place-items-center`}>
      <div>CONTACT</div>
      <div>=</div>
      <div>PHANTOM</div>
    </div>
  )
}

function Sidebar({
  className,
}: {
  className?: string
}) {
  return (
    <div className={className}>
      <LeftSidebar className='h-full bg-transparent w-[5%] text-text font-bold' />
      <RightSidebar className='h-full bg-transparent w-[5%] text-text font-bold' />
    </div>
  )
}

export default Sidebar
