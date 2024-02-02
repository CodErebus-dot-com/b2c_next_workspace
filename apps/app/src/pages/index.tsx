'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const handleClick = (path: string) => {
    router.push(path).then(() => {
      router.reload()
    })
  }

  return (
    <>
      <div className='m-4'>
        <h1 className='text-4xl mb-4 text-red-600'>Landing Page</h1>
        <Link
          href='#'
          onClick={() => handleClick('/signin')}
          className='text-xl text-blue-600 mt-4 mr-4 hover:text-blue-900 hover:underline'
        >
          SignIn
        </Link>
        <Link
          href='#'
          onClick={() => handleClick('/signup')}
          className='text-xl text-blue-600 mt-4 mb-4 hover:text-blue-900 hover:underline'
        >
          SignUp
        </Link>
        <p className='text-orange-600 my-2 text-lg'>
          This is just a preview app. The aim with this app is simply to provide
          a medium to customize the signin/signup pages based on your
          requirement.
        </p>
        <span className='text-orange-600 my-1 font-medium'>
          The loading of this app or its routes does not correlate to the actual
          UI managed by ADB2C.
        </span>
      </div>
    </>
  )
}
