import RandomUser from '@/components/RandomUser'
import ReloadButton from '@/components/ReloadButton'

const endpoint = 'https://randomuser.me/api/'

const fetchUser = async () => {
  const response = await fetch('https://randomuser.me/api/')
  const data = await response.json()
  const random = data.results

  return random
}

export default async function Home() {
  const staticResult = await fetchUser()

  return (
    <main className='flex flex-col min-h-screen items-center justify-center p-24'>
      <div className='flex items-center justify-center space-x-10'>
        <div className='rounded border border-white p-2'>
          <h1 className='text-4xl font-bold'>Static User</h1>
          <p className='text-lg'>{staticResult[0].name.first}</p>
        </div>
        <div className='rounded border border-white p-2'>
          <h1 className='text-4xl font-bold'>Random User</h1>

          <RandomUser />
        </div>
      </div>
      <ReloadButton />
    </main>
  )
}
