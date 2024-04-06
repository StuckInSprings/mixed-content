'use server'

import { Suspense } from 'react'

const fetchRandomUser = async () => {
  const response = await fetch('https://randomuser.me/api/', {
    cache: 'no-cache',
  })
  const data = await response.json()
  const random = data.results

  return random
}

const RandomUser = async () => {
  const randomResult = await fetchRandomUser()
  return (
    <p className='text-lg'>
      <Suspense fallback={<div>Loading...</div>}>
        {randomResult[0].name.first}{' '}
      </Suspense>
    </p>
  )
}

export default RandomUser
