type Frontmatter = {
  title: string
  date: string
  tags: string[]
}

type BlogMeta = Frontmatter & {
  id: string
}

type BlogPost = {
  metadata: BlogMeta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}