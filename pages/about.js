import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { getMdxContent } from '../data/author/intro' // Adjust the import path

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  const introData = await getMdxContent('intro') // Replace with the correct function

  return { props: { authorDetails, introData } }
}

export function About({ introData }) {
  const { mdxSource, frontMatter } = introData || {}

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}

export function MePage() {
  return (
    <>
      <Intro />
    </>
  )
}
