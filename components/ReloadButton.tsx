'use client'

const ReloadButton = () => {
  const reload = () => {
    location.reload()
  }

  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 mx-auto'
      onClick={reload}
    >
      Reload
    </button>
  )
}

export default ReloadButton
