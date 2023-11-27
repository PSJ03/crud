import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex bg-teal-500 justify-between px-8 py-4 items-center">
      <Link href="/" className="text-white text-lg font-bold">
        MongoDB CRUD
      </Link>
      <Link
        href="/addTopic"
        className="bg-purple-300 text-lg font-bold px-4 py-2 rounded-md"
      >
        Add Topic
      </Link>
    </nav>
  )
}
