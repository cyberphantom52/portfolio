import Link from 'next/link'
import React from 'react'
import { getBlogByName } from "../utils"

type Props = {
  cardClass?: string
  titleClass?: string
  descriptionClass?: string
  id: string
}

const BlogCard: React.FC<Props> = async (props) => {
  const post = await getBlogByName(`${props.id}.mdx`)

  if (!post) {
    return <div>No Post</div>
  }

  const { metadata, content } = post

  return (
    <Link href={`/blogs/${metadata.id}`} className={`${props.cardClass} rounded-2xl flex flex-col p-6 overflow-hidden hover:scale-105 transition-transform duration-75 ease-out`}>
      <h1 className={`${props.titleClass}`}>{metadata.title}</h1>
      <span className='italic'>{metadata.date}</span>
      <hr className="hidden md:block border-t-2 border-black my-2" />
      <p className={`${props.descriptionClass} flex-1 overflow-hidden columns-1`}>{content}</p>
    </Link>
  )
}

export default BlogCard