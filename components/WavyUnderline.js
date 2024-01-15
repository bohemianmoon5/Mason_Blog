import React from 'react'

const WavyUnderline = ({ text, spaced = true }) => {
  const containerStyles = {
    position: 'relative',
    display: 'inline-block',
    marginRight: spaced ? '0.5em' : '0', // Add spacing if needed
  }

  const underlineStyles = {
    position: 'absolute',
    content: '""',
    height: '4px',
    width: '100%',
    bottom: 0,
    left: 0,
    backgroundColor: 'transparent',
    backgroundImage:
      'linear-gradient(45deg, #3498db, #e74c3c, #2ecc71, #f39c12, #3498db, #e74c3c, #2ecc71)',
    backgroundSize: '200% 100%',
    backgroundPosition: '0 0',
    transition: 'background-position 0.3s',
  }

  const handleHover = (e) => {
    e.currentTarget.querySelector('.wave-underline').style.backgroundPosition = '200% 100%'
  }

  const handleLeave = (e) => {
    e.currentTarget.querySelector('.wave-underline').style.backgroundPosition = '0 0'
  }

  const words = text.split(' ')

  return (
    <span
      className="word-with-underline"
      style={containerStyles}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {words.map((word, index) => (
        <span key={index}>
          {word}
          {index < words.length - 1 && spaced && ' '}
        </span>
      ))}
      <span className="wave-underline" style={underlineStyles}></span>
    </span>
  )
}

export default WavyUnderline
