import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { getStaticProps } from '@/utils/api'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const DEFAULT_LAYOUT = 'AuthorLayout'

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus}>
      {value}
    </SyntaxHighlighter>
  )
}

export { getStaticProps }

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
      components={{ code: CodeBlock }}
    />
  )
}
