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

  const removeData = async (removeId) => {
    const { data } = await supabase.from('guestbook').delete().eq('id', removeId)
    fetchGuestbook()
  }

  React.useEffect(() => {
    fetchGuestbook()
  }, [])

  return (
    <main className="container mx-auto p-4">
      <Head>
        <title>Guestbook demo - MasonNa</title>
      </Head>
      <div className="mt-5 p-2 flex items-center">
        <input
          ref={messageInput}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setEmptyAlert(false)}
          type="text"
          placeholder="Type your message..."
          className="flex-grow rounded-l-md bg-gray-100 py-2 px-4 text-lg text-gray-800 border border-mint-500 focus:outline-none focus:border-mint-700"
        />
        <button
          onClick={uploadData}
          className="rounded-r-md bg-blue-500 px-4 py-2 text-lg text-white hover:bg-blue-600 transition-all"
        >
          Send
        </button>
      </div>
      <p className={`text-md text-red-500 ${emptyAlert ? 'block' : 'hidden'}`}>
        Message is empty
      </p>      
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
                    <button onClick={() => removeData(entry.id)} className="ml-2 text-red-500">
                      Delete
                    </button>
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