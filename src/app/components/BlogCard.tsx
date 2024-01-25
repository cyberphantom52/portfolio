import Link from 'next/link'
import React from 'react'

type Props = {
  cardClass?: string
  titleClass?: string
  descriptionClass?: string
  metadata: BlogMeta
}

const BlogCard: React.FC<Props> = async (props) => {

  return (
    <Link href={`/blogs/${props.metadata.id}`} className={`rounded-xl p-7 bg-black flex flex-col gap-5 overflow-hidden ${props.cardClass} hover:scale-105 transition-transform duration-75 ease-out`}>
      <div className='flex flex-col gap-2 font-extrabold'>
        <h2 className={`${props.titleClass}`}>{props.metadata.title}</h2>
        <span className='text-white'>January 24, 2023</span>
      </div>
      <p className={`${props.descriptionClass}`}>{props.metadata.description}</p>
    </Link>
  )
}

export default BlogCard