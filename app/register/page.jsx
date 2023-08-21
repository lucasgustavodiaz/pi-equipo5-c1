'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/authContext'
import Link from 'next/link'
import Alert from '@/components/alert'
import { FcGoogle } from 'react-icons/fc'

export default function Register() {
  const { signup, loginWithGoogle, sendEmail } = useAuth()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const router = useRouter()

  const errorMessages = {
    'auth/email-already-exists': 'El correo electrónico ya está en uso',
    'auth/invalid-email': 'El correo electrónico no es válido',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres'
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      await sendEmail()
      router.push('/')
    } catch (error) {
      setError(errorMessages[error.code] || error.message)
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value })

  return (
    <div className='h-screen bg-[#f2f5fa]'>
      <div className='container flex justify-center pt-5 sm:pt-10'>
        <div className='w-full max-w-xs text-sky-950'>
          {error && <Alert message={error} />}
          <form
            onSubmit={handleSubmit}
            className='mb-4 rounded bg-white px-8 pb-6 pt-6 shadow-md'
          >
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-bold text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleChange}
                className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                placeholder='your@email.com'
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='password'
                className='mb-2 block text-sm font-bold text-gray-700'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                id='password'
                onChange={handleChange}
                className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                placeholder='*************'
              />
            </div>
            <button className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'>
              Register
            </button>
          </form>
          <button
            onClick={handleGoogleSignin}
            className='w-full rounded border border-gray-300 bg-slate-50 px-4 py-2 text-black shadow hover:bg-slate-200'
          >
            <FcGoogle className='mr-2 inline-block text-2xl' />
            Sign in with Google
          </button>
          <div className='my-4 flex justify-between px-3 text-sm'>
            Ya tenés una cuenta?
            <Link href='/login' className='text-blue-700 hover:text-blue-900'>
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
