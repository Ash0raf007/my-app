import SignWithGoogle from '@/components/SignWithGoogle'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen flex flex-col justify-center content-center items-center'>
      <p>To show product info Please sign in with google first</p>
      <SignWithGoogle/>
      </div>
  )
}

export default page