import Link from 'next/link'
import React from 'react'
import { metadata } from '../layout'

type Props = {
  cardClass?: string
  titleClass?: string
  descriptionClass?: string
  metadata: BlogMeta
}

const BlogCard: React.FC<Props> = async (props) => {

  return (
    <Link href={`/blogs/${props.metadata.id}`} className={`rounded-xl p-7 ${props.cardClass}`}>
      <div className="flex flex-col gap-5 overflow-hidden">
        <div className="flex flex-col gap-2">
          <h2 className="text-[27px] font-extrabold leading-tight capitalize">{props.metadata.title}</h2>
          <span className="text-2xl leading-7">{props.metadata.date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="h-full text-2xl leading-7 line-clamp-[10]">
          <p>{props.metadata.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard