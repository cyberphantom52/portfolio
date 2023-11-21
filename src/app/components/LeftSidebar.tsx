import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
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

export default LeftSidebar