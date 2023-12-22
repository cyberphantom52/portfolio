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
      <div className="flex flex-col bg-secondary h-full w-full">
          <div className="mx-[5%]">
            <h2 className="font-bold text-6xl mt-4 mb-0">{metadata.title}</h2>
            <p className="text-base">
                {metadata.date}
            </p>
            <br />
            <article className="prose lg:prose-xl">
                {content}
            </article>
            <br />
          </div>

      </div>
  )
}