import { Suspense } from 'react'

const fetchUser = async () => {
  const response = await fetch(`https://randomuser.me/api/`)
  const data = await response.json()
  const random = data.results

  return random
}

export default async function Home() {
  const randomResult = await fetchUser()

  console.log(randomResult)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <PokeCards pokemon={pokemon} /> */}

        <span>{randomResult[0].name.first}</span>
      </Suspense>
    </main>
  )
}
