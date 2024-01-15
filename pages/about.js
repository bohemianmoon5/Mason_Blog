import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Intro from '../data/about/intro.mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  // You need to define getIntroData or use the appropriate function here
  const introData = await getIntroData()

  return { props: { authorDetails, introData } }
}

export function About({ authorDetails, introData }) {
  const { mdxSource, frontMatter } = introData || {}

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}

export function MePage() {
  return (
    <>
      <Intro />
    </>
  )
}
