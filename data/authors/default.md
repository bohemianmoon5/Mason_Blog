---
name: Mason Na
avatar: /static/images/Mason.JPG
occupation: Data Engineer
company: Dongkuk Systems
email: bohemianmoon5@gmail.com
github: https://github.com/bohemianmoon5
---

Hi, I'm Mason Na. I do Data Engineer at the moment.

Learning Java, Python, Informatica, Snowflake, AWS, Google Cloud, Airflow, Docker, Kubernetes, etc ...

Beginning is always small but one of my hope that is keep developing myself.

Feel free to look around this pages.

# Introduction

<section className='mb-10'>
  <div className='flex flex-col gap-2 font-extrabold mb-8'>
    <p className='text-5xl'>Mason Na</p>
    <p className='text-4xl'>Data Engineer</p>
  </div>

  <div className='flex flex-col sm:flex-row items-center gap-8 mb-8'>
    <div className='flex flex-col gap-4'>
      <ul className='flex flex-wrap gap-4'>
        {ContactMenu.map(({ href, icon, title }) => (
          <Link
            className='flex items-center gap-2 font-medium hover:text-point'
            href={href}
            key={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={title}
          >
            {icon}
            <p className='text-base'>{title}</p>
          </Link>
        ))}
      </ul>
    </div>
  </div>

  <h3 className='flex items-center gap-1 text-2xl font-bold mb-2'>
    저는{' '}
    <span className='h-7 inline-flex items-center rounded-md bg-blue-50 dark:bg-yellow-50 px-2 py-1 text-xs font-medium text-point dark:text-darkPoint ring-1 ring-inset ring-blue-700/10 dark:ring-yellow-700/10'>
      _ _ _ _ _ _ _ _
    </span>{' '}
    엔지니어 입니다.
  </h3>

  <ul>
    <li className='flex items-center gap-2 mb-2 font-medium'>
      <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full' />
      Cloud를 접목하여 데이터를 다루는
    </li>
    <li className='flex items-center gap-2 mb-2 font-medium'>
      <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full' />
      모든 데이터 처리 과정을 아우르는
    </li>
    <li className='flex items-center gap-2 mb-2 font-medium'>
      <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full' />
      무엇이든지 하나씩 뜯어보는
    </li>
    <li className='flex items-center gap-2 mb-2 font-medium'>
      <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full' />
      하루 하루 성장하는
    </li>
  </ul>
</section>
