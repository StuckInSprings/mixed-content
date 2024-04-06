export const dynamic = 'error'

import ReloadButton from '@/components/ReloadButton'
import { Suspense } from 'react'

const endpoint = 'https://randomuser.me/api/'

const fetchUser = async () => {
  const response = await fetch(endpoint)
  const data = await response.json()
  const random = data.results

  return random
}

const fetchRandomUser = async () => {
  const response = await fetch(endpoint, {
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
    <main className='flex flex-col min-h-screen items-center justify-center p-24'>
      <div className='flex items-center justify-center space-x-10'>
        <div className='rounded border border-white p-2'>
          <h1 className='text-4xl font-bold'>Static User</h1>
          <p className='text-lg'>{staticResult[0].name.first}</p>
        </div>
        <div className='rounded border border-white p-2'>
          <h1 className='text-4xl font-bold'>Random User</h1>

          <p className='text-lg'>
            <Suspense fallback={<div>Loading...</div>}>
              {randomResult[0].name.first}{' '}
            </Suspense>
          </p>
        </div>
      </div>
      <ReloadButton />
    </main>
  )
}
