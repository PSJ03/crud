'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  const { status, data: session } = useSession()

  return (
    <nav className="flex bg-teal-500 justify-between px-8 py-4 items-center">
      <Link href="/" className="text-white text-xl font-bold">
        MongoDB CRUD
      </Link>
      <div className="flex gap-3">
        <Link
          href="/addTopic"
          className="bg-purple-300 text-lg font-bold px-4 py-2 rounded-md"
        >
          Add Topic
        </Link>
        {status === 'authenticated' ? (
          <>
            <button
              onClick={() => signOut()}
              className="bg-sky-400 hover:bg-sky-500 text-white px-4  py-2 rounded-md text-lg font-bold"
            >
              Sign Out
            </button>
            <div className="flex gap-2 items-center">
              <Image
                className="rounded-full"
                src={session?.user?.image}
                width={40}
                height={40}
                alt={session?.user?.name}
              />
              <span className="text-white font-bold">
                {session?.user?.name}
              </span>
            </div>
          </>
        ) : (
          <Link
            href="/signIn"
            className="bg-sky-400 hover:bg-sky-500 text-white px-4 py-2 rounded-md text-lg font-bold"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}
