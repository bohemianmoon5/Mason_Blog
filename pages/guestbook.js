import React from 'react'
import Head from 'next/head'
import { supabase } from '../lib/supabaseClient.js'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Guestbook = () => {
  const [guestbookData, setGuestbookData] = React.useState(null)
  const [message, setMessage] = React.useState('')
  const [emptyAlert, setEmptyAlert] = React.useState(false)
  const messageInput = React.useRef()

  const fetchGuestbook = async () => {
    const { data, error } = await supabase.from('guestbook').select()
    if (data) {
      setGuestbookData(data)
      console.log(data)
    }
  }

  const uploadData = async () => {
    if (!message.trim()) {
      setEmptyAlert(true)
      return
    }

    await supabase.from('guestbook').insert([
      {
        message,
      },
    ])

    fetchGuestbook()
    setMessage('')
  }

  React.useEffect(() => {
    fetchGuestbook()
  }, [])

  return (
    <main className="container mx-auto p-4">
      <Head>
        <title>Guestbook demo - MasonNa</title>
      </Head>
      <div className="mt-5 flex items-center p-2">
        <input
          ref={messageInput}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setEmptyAlert(false)}
          type="text"
          placeholder="Type your message..."
          className="border-mint-500 focus:border-mint-700 flex-grow rounded-l-md border bg-gray-100 py-2 px-4 text-lg text-gray-800 focus:outline-none"
        />
        <button
          onClick={uploadData}
          className="rounded-r-md bg-blue-500 px-4 py-2 text-lg text-white transition-all hover:bg-blue-600"
          style={{ backgroundColor: '#7CD2B3' }}
        >
          ⬇️
        </button>
      </div>
      <p className={`text-md text-red-500 ${emptyAlert ? 'block' : 'hidden'}`}>Message is empty</p>
      <div className="mb-5">
        <ul>
          {guestbookData ? (
            guestbookData
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((entry) => (
                <li
                  key={entry.id}
                  className="my-1 rounded-md px-3 py-2 duration-100 hover:bg-neutral-200"
                >
                  <p className="text-md">{entry.message}</p>
                  <div className="flex text-xs">
                    <p>
                      {entry.created_at.slice(0, 10)}&thinsp;at&thinsp;
                      {entry.created_at.slice(11, 16)}
                    </p>
                  </div>
                </li>
              ))
          ) : (
            <Skeleton
              className="my-4"
              borderRadius={10}
              count={1}
              height={60}
              baseColor="#dfdfdf"
              highlightColor="#cfc9c9"
              duration={0.8}
            />
          )}
        </ul>
      </div>
    </main>
  )
}

export default Guestbook
