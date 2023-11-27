import TopicList from '@/components/TopicList'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold">WebDev Topics</h1>
      <p className="mb-4"> MongoDB CRUD Example</p>
      <TopicList />
    </>
  )
}
