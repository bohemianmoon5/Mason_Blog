import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import fs from 'fs/promises'
import path from 'path'

const DEFAULT_AUTHOR_LAYOUT = 'AuthorLayout'
const DEFAULT_ABOUT_LAYOUT = 'DefaultAboutLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])

  const introFilePath = path.join(process.cwd(), 'data', 'about', 'intro.mdx')

  try {
    const introContent = await fs.readFile(introFilePath, 'utf8')
    console.log('introContent:', introContent)

    const mergedMdxSource = `${authorDetails.mdxSource}\n\n${introContent}`
    console.log('mergedMdxSource:', mergedMdxSource)

    return { props: { authorDetails: { ...authorDetails, mdxSource: mergedMdxSource } } }
  } catch (error) {
    console.error(`Error reading intro.mdx: ${error}`)
    return { props: { authorDetails } }
  }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_ABOUT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
