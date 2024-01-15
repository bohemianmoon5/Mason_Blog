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
    position: 'relative',
    cursor: 'pointer',
    textDecoration: 'none',
  }

  const waveStyles = {
    position: 'absolute',
    content: '""',
    height: '4px',
    width: '100%', // Adjusted to cover the entire width
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

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    >
      <a
        href={frontMatter.github}
        style={underlineStyles}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="wave-underline" style={waveStyles}></span>
        {frontMatter.name}
      </a>
    </MDXLayoutRenderer>
  )
}
