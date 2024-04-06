import { Suspense } from 'react'

const fetchUser = async () => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const random = data.results

  return random
}

export default async function Home() {
  const randomResult = await fetchUser()

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-4xl font-bold'>Static User</h1>
      <p className='text-lg'>{randomResult[0].name.first}</p>
      <h1 className='text-4xl font-bold'>Random User</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <p className='text-lg'>{randomResult[0].name.first}</p>
      </Suspense>
    </main>
  )
}
