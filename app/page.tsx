import { unstable_cache } from 'next/cache'
import { Suspense } from 'react'

const fetchUser = async () => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const random = data.results

  return random
}

const fetchRandomUser = async () => {
  const response = await fetch(`https://randomuser.me/api/`, {
    cache: 'no-cache',
  })
  const data = await response.json()
  const random = data.results

  return random
}

export default async function Home() {
  const staticResult = await fetchUser()
  const randomResult = await fetchRandomUser()

  return (
    <main className='flex min-h-screen items-center justify-center p-24 space-x-10'>
      <div className='rounded border border-white p-2'>
        <h1 className='text-4xl font-bold'>Static User</h1>
        <p className='text-lg'>{staticResult[0].name.first}</p>
      </div>
      <div className='rounded border border-white p-2'>
        <h1 className='text-4xl font-bold'>Random User</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <p className='text-lg'>{randomResult[0].name.first}</p>
        </Suspense>
      </div>
    </main>
  )
}
