import React from 'react'
import Typed from 'typed.js'
import Image from 'next/image'
// import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
// import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import projectsdata from '@/data/projectsData'
import Card from '@/components/Card'
import projectsData from '@/data/projectsData'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
// import formatDate from '@/lib/utils/formatDate'

const experiences = [
  { year: '2021 ~', title: 'Data Engineer', description: 'Working in the Dongkuk Systems.' },
  { year: '2021', title: 'MSA Full-Stack developer course', description: 'Build various Web-Service and Big Web Service with java.' },
];

export default function Home({ posts }) {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: ['I love running 🏃‍♂️', 'I love movies 🎬', 'I love music 🎵', 'I love myself 💜'],
      typespeed: 100,
      backspeed: 70,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    }

    typed.current = new Typed(el.current, options)

    return () => {
      if (typed.current === 'function') {
        typed.current.destory()
      }
    }
  }, [])

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-16">
        
        {/* About Me */}
        <section className="text-center pt-10 flex flex-col items-center">
          <Image src="/static/images/memoji01.png" alt="Profile Image" width={150} height={150} className="rounded-full" />
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl mt-4">Hi, I'm <span className="text-primary-500">Mason Na</span></h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">Currently working as a Data Engineer.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2"><span ref={el}></span></p>
        </section>
        
        {/* Tech Stack */}
        <section className="max-w-4xl mx-auto px-6">
        <h2 className="text-xl leading-8 tracking-tight">
              Enjoy finding and solving problems.
            </h2>
            <p className="dark:text-grey text-gray mb-8   mt-4 text-sm">
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=FFFFFF" alt="Java Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=FFFFFF" alt="Python Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=Oracle&logoColor=FFFFFF" alt="Oracle Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=FFFFFF" alt="PostgreSQL Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=FFFFFF" alt="MySQL Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=FFFFFF" alt="JavaScript Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=AWS&logoColor=FFFFFF" alt="AWS Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/GoogleBigquery-669DF6?style=flat-square&logo=GoogleBigquery&logoColor=FFFFFF" alt="GoogleBigquery Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/Informatica-FF4D00?style=flat-square&logo=Informatica&logoColor=FFFFFF" alt="Informatica Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/Snowflake-29B5E8?style=flat-square&logo=Snowflake&logoColor=FFFFFF" alt="Snowflake Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=FFFFFF" alt="Next.js Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=SpringBoot&logoColor=FFFFFF" alt="SpringBoot Badge"/></span>
              <span className="mr-3 inline-block whitespace-nowrap pt-3"><img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=FFFFFF" alt="Git Badge"/></span>
            </p>
        </section>
        
        {/* Projects Section */}
        <section className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Projects</h2>
          <div className="container py-12">
            <div className="-m-4 flex flex-wrap">
              {projectsData.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Experience</h2>
          <div className="relative border-l border-gray-300 dark:border-gray-700 mt-6">
            {experiences.map((exp, index) => (
              <div key={index} className="ml-6 mb-6">
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2.5 mt-1.5"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{exp.title}</h3>
                <span className="text-gray-600 dark:text-gray-400">{exp.year}</span>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}