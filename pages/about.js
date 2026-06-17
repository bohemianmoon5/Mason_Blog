import React from 'react'
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import { supabase } from '../lib/supabaseClient.js'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

function Guestbook() {
  const [guestbookData, setGuestbookData] = React.useState(null)
  const [message, setMessage] = React.useState('')
  const [name, setName] = React.useState('')
  const [emptyAlert, setEmptyAlert] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const fetchGuestbook = async () => {
    const { data, error } = await supabase.from('guestbook').select()
    if (data) {
      setGuestbookData(data)
    }
  }

  const uploadData = async () => {
    if (!message.trim()) {
      setEmptyAlert(true)
      return
    }

    await supabase.from('guestbook').insert([{ message, username: name.trim() || '익명' }])

    setSubmitted(true)
    setMessage('')
    setName('')
    fetchGuestbook()
    setTimeout(() => setSubmitted(false), 3000)
  }

  React.useEffect(() => {
    fetchGuestbook()
  }, [])

  return (
    <div className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-700">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        방명록 💬
      </h2>
      <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        여기까지 읽어주셨다면 한 마디 남겨주세요 :) 짧은 인사도 피드백도 모두 환영합니다.
      </p>

      {/* 입력 영역 */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="mb-3 flex gap-3">
          <input
            type="text"
            placeholder="이름 (선택)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-1/3 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 outline-none transition focus:border-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
          />
          <input
            type="text"
            placeholder="메시지를 입력해주세요..."
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              setEmptyAlert(false)
            }}
            onKeyDown={(e) => e.key === 'Enter' && uploadData()}
            className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 outline-none transition focus:border-primary-500 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100"
          />
          <button
            onClick={uploadData}
            className="rounded-lg bg-primary-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary-600 active:scale-95"
          >
            남기기 →
          </button>
        </div>
        {emptyAlert && (
          <p className="text-xs text-red-500">메시지를 입력해주세요.</p>
        )}
        {submitted && (
          <p className="text-xs text-green-500">메시지가 등록되었습니다 :)</p>
        )}
      </div>

      {/* 메시지 목록 */}
      {guestbookData ? (
        guestbookData.length === 0 ? (
          <p className="py-10 text-center text-sm text-gray-400">
            아직 방명록이 비어있어요. 첫 번째 메시지를 남겨주세요 :)
          </p>
        ) : (
          <ul className="space-y-3">
            {guestbookData
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((entry) => (
                <li
                  key={entry.id}
                  className="rounded-xl border border-gray-200 bg-white px-5 py-4 transition hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800/40 dark:hover:border-gray-600"
                >
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                      {entry.username || '익명'}
                    </span>
                    <span className="text-xs text-gray-400">
                      {entry.created_at.slice(0, 10)}&thinsp;{entry.created_at.slice(11, 16)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{entry.message}</p>
                </li>
              ))}
          </ul>
        )
      ) : (
        <Skeleton
          className="my-3"
          borderRadius={12}
          count={3}
          height={72}
          baseColor="#f0f0f0"
          highlightColor="#e0e0e0"
          duration={0.8}
        />
      )}
    </div>
  )
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <div className="mx-auto max-w-3xl px-4 pb-20 xl:max-w-5xl xl:px-0">
        <Guestbook />
      </div>
    </>
  )
}
