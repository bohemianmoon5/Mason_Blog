import React from 'react'
import Head from 'next/head'
import { supabase } from '../lib/supabaseClient.js'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const guestbook = () => {
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
    <main className="">
      <Head>
        <title>Guestbook demo - ElasChen</title>
      </Head>
      <div className="p-2 mt-5">
        <input
          ref={messageInput}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          onFocus={() => setEmptyAlert(false)}
          type="text"
          placeholder="Your message..."
          className="w-full py-1 px-2 text-lg rounded-md bg-neutral-100 ring-1 ring-blue-300 focus:ring-[3px] focus:outline-none duration-75"
        />
        <p className={`text-md text-red-500 ${emptyAlert ? 'block' : 'hidden'}`}>
          Message is empty
        </p>
        <button
          onClick={uploadData}
          className="drop-shadow-sm px-2 py-1 bg-blue-400 hover:bg-blue-500 duration-100 rounded-md mt-2 w-full text-lg"
        >
          Send it
        </button>
      </div>
      <div className="mb-5">
        <ul>
          {guestbookData ? (
            guestbookData
              .sort((a, b) => (a.id < b.id ? 1 : -1))
              .map((entry) => (
                <li
                  key={entry.id}
                  className="hover:bg-neutral-200 px-3 py-2 rounded-md duration-100 my-1 hover:drop-shadow-sm"
                >
                  <p className="text-md">{entry.message}</p>
                  <div className="flex text-xs">
                    <p>
                      {entry.created_at.slice(0, 10)}&thinsp;at&thinsp;
                      {entry.created_at.slice(11, 16)}
                    </p>
                    <button onClick={() => removeData(entry.id)} className="text-red-500 ml-2">
                      Delete
                    </button>
                  </div>
                </li>
              ))
          ) : (
            <Skeleton
              className="my-2"
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

export default guestbook
