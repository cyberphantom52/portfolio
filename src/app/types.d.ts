type Frontmatter = {
  title: string
  description: string
  tags: string[]
}

type BlogMeta = Frontmatter & {
  id: string
  date: Date
}

type BlogPost = {
  metadata: BlogMeta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}