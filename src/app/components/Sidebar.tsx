import Link from 'next/link'
import React from 'react'

export function LeftSidebar() {
  return (
    <div className="bg-text flex justify-between vertical-writing-lr w-[16] lg:w-20 py-5 z-10">
      <span className="self-center rotate-180 text-background">
        <Link href="/">HOME</Link>
      </span>
      <span className="self-center rotate-180 text-background">
        <Link href="/about">W</Link>
      </span>
      <span className="self-center rotate-180 text-background">GitHub.GitLab</span>
    </div>
  )
}

export function RightSidebar() {
  return (
  <div className="bg-text flex justify-between vertical-writing-lr w-16 lg:w-20 py-5 z-10">
      <div className="self-center text-background">CONTACT</div>
      <div className="self-center text-background">=</div>
      <div className="self-center text-background">PHANTOM</div>
    </div>
  )
}
