const Robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://bohemianmoon5.vercel.app/sitemap.xml',
  }
}

export default Robots