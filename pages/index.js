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
  {
    year: '2021',
    title: 'MSA Full-Stack developer course',
    description: 'Build various Web-Service and Big Web Service with java.',
  },
]

export default function Home({ posts }) {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      strings: ['I love running 🏃‍♂️', 'I love movies 🎬', 'I love music 🎵', 'I love myself 💜'],
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: false,
      // fadeOut: true,
      // fadeOutClass: "typed-fade-out",
      // fadeOutDelay: 1000,
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
        <section className="flex flex-col items-center pt-10 text-center">
          <Image
            src="/static/images/memoji01.png"
            alt="Profile Image"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl">
            Hi, I'm <span className="text-primary-500">Mason Na</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-500 dark:text-gray-400">
            Currently working as a Data Engineer.<br/><br/>  
            안녕하세요. 나문오입니다.<br/>
            저는 현재 동국시스템즈에서 데이터 엔지니어로 일하고 있습니다.<br/><br/>
          </p>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            <span ref={el}></span>
          </p>
        </section>

        {/* Certificates Section */}
        <section className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-3xl font-bold text-gray-800 dark:text-gray-100">
            Certifications
          </h2>

          {/* 첫째 줄 */}
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-3">
            <Image
              src="/static/images/CDGC_Modernization_Certification_2025.png"
              alt="CDGC Modernization Certification 2025"
              width={260}
              height={260}
              className="object-contain"
            />
            <Image
              src="/static/images/CDQ_Implementation_Certification_2025.png"
              alt="CDQ Implementation Certification 2025"
              width={260}
              height={260}
              className="object-contain"
            />
            <Image
              src="/static/images/CAI_Implementation_Certification_2025.png"
              alt="CAI Implementation Certification 2025"
              width={260}
              height={260}
              className="object-contain"
            />
          </div>

          {/* 둘째 줄 */}
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
            <Image
              src="/static/images/CDI_R38_professional_certification-removebg.png"
              alt="CDI R38 Professional Certification"
              width={400}
              height={400}
              className="object-contain"
            />
            <Image
              src="/static/images/SnowPro_core_certification.png"
              alt="SnowPro Core Certification"
              width={280}
              height={280}
              className="object-contain"
            />
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Tech Stack</h2>
          <p className="dark:text-grey text-gray mb-8   mt-4 text-sm">
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=FFFFFF"
                alt="Java Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=FFFFFF"
                alt="Python Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=Oracle&logoColor=FFFFFF"
                alt="Oracle Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=FFFFFF"
                alt="PostgreSQL Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=FFFFFF"
                alt="MySQL Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=FFFFFF"
                alt="JavaScript Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=AWS&logoColor=FFFFFF"
                alt="AWS Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/GoogleBigquery-669DF6?style=flat-square&logo=GoogleBigquery&logoColor=FFFFFF"
                alt="GoogleBigquery Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Informatica-FF4D00?style=flat-square&logo=Informatica&logoColor=FFFFFF"
                alt="Informatica Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Snowflake-29B5E8?style=flat-square&logo=Snowflake&logoColor=FFFFFF"
                alt="Snowflake Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=FFFFFF"
                alt="Next.js Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=SpringBoot&logoColor=FFFFFF"
                alt="SpringBoot Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=FFFFFF"
                alt="Git Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Airflow-017CEE?style=flat-square&logo=Airflow&logoColor=FFFFFF"
                alt="Airflow Badge"
                className="h-6"
              />
            </span>
            <span className="mr-3 inline-block whitespace-nowrap pt-3">
              <img
                src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=FFFFFF"
                alt="Docker Badge"
                className="h-6"
              />
            </span>
          </p>
        </section>

        {/* Projects Section */}
        <section className="mx-auto max-w-4xl px-6">
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
        <section className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Experience</h2>
          <div className="relative mt-6 border-l border-gray-300 dark:border-gray-700">
            {experiences.map((exp, index) => (
              <div key={index} className="ml-6 mb-6">
                <div className="absolute -left-2.5 mt-1.5 h-4 w-4 rounded-full bg-teal-500"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {exp.title}
                </h3>
                <span className="text-gray-600 dark:text-gray-400">{exp.year}</span>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
