import { compileMDX } from 'next-mdx-remote/rsc'

type BlogInfo = {
  name: string
  path: string
  download_url: string
}

export async function getBlogByName(name: string): Promise<BlogPost | undefined> {
  const result = await fetch(`https://raw.githubusercontent.com/${process.env.REPOSITORY}/${process.env.BRANCH}${process.env.DIRECTORY}/${name}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  })

  if (!result.ok) return undefined

  const rawData = await result.text()

  if (rawData === '404: Not Found') return undefined

  const { frontmatter, content } = await compileMDX<Frontmatter>({
    source: rawData,
    options: {
      parseFrontmatter: true,
    }
  })

  const id = name.replace('.mdx', '')

  const blogPost: BlogPost = { metadata: { id, ...frontmatter }, content }

  return blogPost
}

export async function getBlogsMeta(): Promise<BlogMeta[] | undefined> {
  const result = await fetch(`https://api.github.com/repos/${process.env.REPOSITORY}/contents${process.env.DIRECTORY}?ref=${process.env.BRANCH}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28',
    }
  })

  if (!result.ok) return undefined

  const data: BlogInfo[] = await result.json()

  const blogs = data
    .filter(blog => blog.name.endsWith('.mdx'))
    .map(blog => blog.name)

  if (blogs.length === 0)return undefined
  const blogPosts = []

  for (const name of blogs) {
    const blog = await getBlogByName(name)
    if (blog) blogPosts.push(blog.metadata)
  }

  return blogPosts.sort((a, b) => a.date > b.date ? -1 : 1)
}