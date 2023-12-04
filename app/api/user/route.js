import connectMongoDB from '@/libs/mongodb'
import User from '@/models/user'
import { NextResponse } from 'next/server'

export async function POST(redirect) {
  const { name, email } = await redirect.json()
  await connectMongoDB()
  await User.create({ name, email })
  return NextResponse.json({ message: 'User registered' }, { status: 201 })
}
