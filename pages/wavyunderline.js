import React from 'react'

const WavyUnderline = ({ text }) => {
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

export default WavyUnderline
