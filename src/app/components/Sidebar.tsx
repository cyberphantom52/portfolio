import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeSwitcher'

export function LeftSidebar({
  className,
}: {
  className?: string
}) {
  return (
    <div className={`${className} flex vertical-writing-lr py-5 z-10 place-content-between place-items-center h-full bg-transparent w-[5%] text-text font-bold`}>
      <Link href="/" className="rotate-180">HOME</Link>
      <span className="rotate-180">W</span>
      <span className='rotate-180'>CONTACT</span>
    </div>
  )
}

export function RightSidebar({
  className,
}: {
  className?: string
}) {
  return (
    <div className={`${className} flex vertical-writing-lr py-5 z-10 place-content-between place-items-center h-full bg-transparent w-[5%] text-text font-bold`}>
      <Link href="https://github.com/cyberphantom52/">GitHub</Link>
      <ThemeToggle className="w-1/2"/>
      <Link href="https://gitlab.com/cyberphantom52/">GitLab</Link>
    </div>
  )
}
