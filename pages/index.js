import React from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'

const experiences = [
  {
    year: '2021 — 현재',
    role: 'Data Engineer',
    company: '동국시스템즈 (Dongkuk Systems)',
    desc: '엔터프라이즈 고객사의 데이터 웨어하우스 클라우드 전환 프로젝트 다수 수행. Snowflake 기반 분석 환경 구축, Informatica를 활용한 ETL 파이프라인 설계 및 최적화, 데이터 거버넌스 체계 수립을 주도적으로 담당.',
    tags: ['Snowflake', 'Informatica', 'AWS', 'BigQuery', 'Airflow', 'Python'],
  },
  {
    year: '2021',
    role: 'MSA Full-Stack Developer Course',
    company: '교육 수료',
    desc: 'Java 기반 마이크로서비스 아키텍처 및 대용량 웹 서비스 설계·개발 학습. Spring Boot, Oracle DB, 클라우드 배포 실습을 통해 백엔드 기반 역량 형성.',
    tags: ['Java', 'Spring Boot', 'Oracle', 'MySQL'],
  },
]

const projects = [
  {
    client: '현대홈쇼핑 · 2023',
    name: 'Snowflake 차세대 분석 환경 구축',
    desc: '기존 On-Premise 레거시 환경을 Snowflake 기반 클라우드 데이터 플랫폼으로 전환. Informatica IDMC를 활용한 ETL 파이프라인 설계, 데이터 거버넌스 정책 수립, 분석 워크로드 최적화.',
    tags: ['Snowflake', 'Informatica IDMC', 'AWS S3', 'Python', 'SQL'],
    href: 'https://github.com/bohemianmoon5/Hyundai_Homeshopping_Snowflake_Project',
    badge: 'ENTERPRISE',
    imgSrc: '/static/images/project5.jpg',
    featured: true,
  },
  {
    client: 'LG U+ · 2022',
    name: '금융마이데이터 분석 환경 구축',
    desc: '금융마이데이터와 고객행동 데이터를 결합하여 Snowflake 기반 마케팅 분석 플랫폼 구축. 대고객 마케팅 고도화를 위한 데이터 파이프라인 설계 및 운영.',
    tags: ['Snowflake', 'Informatica', 'BigQuery', 'Python'],
    href: 'https://github.com/bohemianmoon5/LG_Uplus_Snowflake_Project',
    badge: 'ENTERPRISE',
    imgSrc: '/static/images/project4.jpg',
    featured: false,
  },
  {
    client: '개인 프로젝트 · 2021',
    name: '개인 블로그 & 키오스크 시스템',
    desc: 'Java Spring Framework 기반 개인 블로그와 스터디카페 키오스크 시스템 개발. 회원 관리, 게시판, 예약/결제 핵심 기능 구현.',
    tags: ['Java', 'Spring', 'Oracle', 'MySQL'],
    href: 'https://github.com/bohemianmoon5/myblog',
    badge: 'PERSONAL',
    imgSrc: '/static/images/project3.png',
    featured: false,
  },
]

const skillGroups = [
  {
    icon: '🗄️',
    title: 'Data Platform',
    skills: [
      { name: 'Snowflake', pct: 90 },
      { name: 'BigQuery', pct: 75 },
      { name: 'Oracle', pct: 80 },
      { name: 'PostgreSQL', pct: 70 },
      { name: 'MySQL', pct: 70 },
    ],
  },
  {
    icon: '⚙️',
    title: 'ETL & Pipeline',
    skills: [
      { name: 'Informatica', pct: 88 },
      { name: 'Airflow', pct: 65 },
      { name: 'Docker', pct: 60 },
    ],
  },
  {
    icon: '☁️',
    title: 'Cloud',
    skills: [
      { name: 'AWS', pct: 72 },
      { name: 'Google Cloud', pct: 60 },
    ],
  },
  {
    icon: '💻',
    title: 'Languages',
    skills: [
      { name: 'SQL', pct: 90 },
      { name: 'Python', pct: 75 },
      { name: 'Java', pct: 65 },
      { name: 'JavaScript', pct: 50 },
    ],
  },
]

const certs = [
  {
    icon: '❄️',
    name: 'SnowPro Core Certification',
    issuer: 'Snowflake',
    year: '2024',
    img: '/static/images/SnowPro_core_certification.png',
  },
  {
    icon: '🏗️',
    name: 'CDI R38 Professional',
    issuer: 'Informatica',
    year: '2024',
    img: '/static/images/CDI_R38_professional_certification-removebg.png',
  },
  {
    icon: '📊',
    name: 'CDGC Modernization',
    issuer: 'Informatica',
    year: '2025',
    img: '/static/images/CDGC_Modernization_Certification_2025.png',
  },
  {
    icon: '✅',
    name: 'CDQ Implementation',
    issuer: 'Informatica',
    year: '2025',
    img: '/static/images/CDQ_Implementation_Certification_2025.png',
  },
  {
    icon: '🤖',
    name: 'CAI Implementation',
    issuer: 'Informatica',
    year: '2025',
    img: '/static/images/CAI_Implementation_Certification_2025.png',
  },
]

function SectionLabel({ children }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-6 bg-primary-500" />
      <span className="font-mono text-xs uppercase tracking-widest text-primary-500">
        {children}
      </span>
    </div>
  )
}

function SkillBar({ pct }) {
  return (
    <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
      <div
        className="h-full rounded-full bg-primary-500 transition-all duration-700"
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {/* ── HERO ── */}
        <section className="pb-20 pt-16">
          <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary-500">
            <span className="h-px w-8 bg-primary-500" />
            Data Engineer
          </p>
          <h1 className="mb-3 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-gray-100 sm:text-7xl">
            Mason
            <br />
            <span className="text-primary-500">Na.</span>
          </h1>
          <p className="mb-4 text-xl font-light text-gray-500 dark:text-gray-400 sm:text-2xl">
            데이터로 가치를 만드는 엔지니어
          </p>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
            동국시스템즈에서 On-Premise → Cloud 마이그레이션 및 대규모 데이터 파이프라인을
            설계·구축합니다. Snowflake, Informatica, AWS를 중심으로 데이터 품질과 성능을 함께
            고려합니다.
          </p>

          {/* Stats */}
          <div className="mb-10 flex flex-wrap gap-10">
            {[
              { num: '4+', label: 'Years Experience' },
              { num: '5+', label: 'Enterprise Projects' },
              { num: '5', label: 'Certifications' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                  {s.num.replace('+', '')}
                  <span className="text-primary-500">{s.num.includes('+') ? '+' : ''}</span>
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-gray-400">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600 active:scale-95"
            >
              프로젝트 보기 →
            </a>
            <a
              href="mailto:bohemianmoon5@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-300"
            >
              📧 연락하기
            </a>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="py-20" id="experience">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            경력 사항
          </h2>
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-[160px_1px_1fr] gap-x-8 border-b border-gray-100 py-10 last:border-0 dark:border-gray-800"
              >
                {/* Date */}
                <div className="pt-1 text-right font-mono text-xs text-gray-400">{exp.year}</div>
                {/* Line + dot */}
                <div className="relative bg-gray-200 dark:bg-gray-700">
                  <div className="absolute left-1/2 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary-500 ring-2 ring-white dark:ring-gray-900" />
                </div>
                {/* Content */}
                <div>
                  <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
                    {exp.role}
                  </div>
                  <div className="mb-3 text-sm font-medium text-primary-500">{exp.company}</div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {exp.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary-200 bg-primary-50 px-3 py-0.5 text-xs font-medium text-primary-600 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="py-20" id="projects">
          <SectionLabel>Projects</SectionLabel>
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            주요 프로젝트
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-primary-700 ${
                  p.featured ? 'md:col-span-2' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${
                    p.featured ? 'h-52' : 'h-40'
                  }`}
                >
                  <Image
                    src={p.imgSrc}
                    alt={p.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-4 top-4 rounded border border-primary-300 bg-primary-50/90 px-2 py-0.5 font-mono text-xs text-primary-600 backdrop-blur dark:border-primary-700 dark:bg-primary-900/80 dark:text-primary-400">
                    {p.badge}
                  </span>
                </div>
                {/* Body */}
                <div className="p-6">
                  <div className="mb-1 font-mono text-xs uppercase tracking-wider text-gray-400">
                    {p.client}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-gray-100">
                    {p.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {p.desc}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary-200 bg-primary-50 px-3 py-0.5 text-xs font-medium text-primary-600 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary-500 transition hover:gap-2 hover:text-primary-600"
                  >
                    GitHub에서 보기 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="py-20" id="skills">
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition hover:border-primary-200 dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-primary-800"
              >
                <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary-500">
                  <span>{group.icon}</span>
                  {group.title}
                </div>
                <div className="space-y-3">
                  {group.skills.map((s) => (
                    <div key={s.name} className="flex items-center gap-3">
                      <span className="w-24 shrink-0 text-xs text-gray-500 dark:text-gray-400">
                        {s.name}
                      </span>
                      <SkillBar pct={s.pct} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section className="py-20" id="certs">
          <SectionLabel>Certifications</SectionLabel>
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
            자격증 & 인증
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {certs.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-primary-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-800/50"
              >
                <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-lg">
                  <Image src={c.img} alt={c.name} layout="fill" objectFit="contain" />
                </div>
                <div className="mb-1 text-xs font-semibold leading-snug text-gray-800 dark:text-gray-100">
                  {c.name}
                </div>
                <div className="mb-2 text-xs text-gray-400">{c.issuer}</div>
                <span className="rounded-full bg-primary-50 px-2 py-0.5 font-mono text-xs text-primary-500 dark:bg-primary-900/30">
                  {c.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="py-20" id="contact">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-12 text-center dark:border-gray-700 dark:bg-gray-800/30">
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
              함께 일하고 싶으신가요?
            </h2>
            <p className="mb-8 text-gray-500 dark:text-gray-400">
              데이터 파이프라인, 클라우드 마이그레이션, 분석 환경 구축에 관심 있으신 분들의 연락을
              환영합니다.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:bohemianmoon5@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-600"
              >
                📧 이메일 보내기
              </a>
              <a
                href="https://github.com/bohemianmoon5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition hover:border-primary-500 hover:text-primary-500 dark:border-gray-600 dark:text-gray-300"
              >
                GitHub 방문 →
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
