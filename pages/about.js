import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  const underlineStyles = {
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  }

  const waveStyles = {
    position: 'absolute',
    content: '""',
    height: '4px',
    width: '100%',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    backgroundImage: 'linear-gradient(90deg, #3498db, #e74c3c, #2ecc71, #f39c12)',
    backgroundSize: '200% 100%',
    backgroundPosition: '0 0',
    transition: 'background-position 0.3s',
  }

  const handleHover = (e) => {
    e.currentTarget.querySelector('.wave-underline').style.backgroundPosition = '100% 0'
  }

  const handleLeave = (e) => {
    e.currentTarget.querySelector('.wave-underline').style.backgroundPosition = '0 0'
  }

  const applyWavyUnderline = (text) => {
    return (
      <span
        className="word-with-underline"
        style={underlineStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {text}
        <span className="wave-underline" style={waveStyles}></span>
      </span>
    )
  }

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    >
      <div>
        {applyWavyUnderline('Java')}
        {' and '}
        {applyWavyUnderline('Python')}
        {' are programming languages I am learning.'}
      </div>
    </MDXLayoutRenderer>
  )
}
