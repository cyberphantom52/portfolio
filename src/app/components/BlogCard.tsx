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
    <Link href={`/blogs/${props.metadata.id}`} className={`${props.cardClass} rounded-2xl flex flex-col p-6 overflow-hidden dark:text-text hover:scale-105 transition-transform duration-75 ease-out`}>
      <h1 className={`${props.titleClass}`}>{props.metadata.title}</h1>
      <span className='italic'>{props.metadata.date}</span>
      <hr className="hidden md:block border-t-2 border-black dark:border-white my-2" />
      <p className={`${props.descriptionClass} flex-1 overflow-hidden columns-1`}>{props.metadata.description}</p>
    </Link>
  )
}

export default BlogCard