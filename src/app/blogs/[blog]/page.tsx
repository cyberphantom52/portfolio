import { getBlogsMeta, getBlogByName } from "../../utils"

export async function generateStaticParams() {
  const posts = await getBlogsMeta()

  if (!posts) return []

  return posts.map((post) => ({
    blog: post.id
  }))
}

type Props = {
  params: {
    blog: string
  }
}

export async function generateMetadata({ params: { blog } }: Props) {

  const post = await getBlogByName(`${blog}.mdx`) //deduped!

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.metadata.title,
  }
}

export default async function Post({ params: { blog } }: Props) {

  const post = await getBlogByName(`${blog}.mdx`)

  if (!post) {
    return <div>Post Not Found</div>
  }

  const { metadata, content } = post

  return (
    <div className="w-full overflow-auto">
      <article className="mx-auto prose dark:prose-invert lg:prose-xl p-6">
        <h1 className="uppercase">{metadata.title}</h1>
        {content}
      </article>
    </div>
  )
}