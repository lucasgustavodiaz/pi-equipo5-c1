'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/authContext'
import Link from 'next/link'
import Alert from '@/components/alert'
import { FcGoogle } from 'react-icons/fc'

export default function Login() {
  const { login, loginWithGoogle, resetPassword } = useAuth()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const router = useRouter()

  const errorMessages = {
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/missing-password': 'Ingrese la contraseña',
    'auth/wrong-password': 'Contraseña incorrecta',
    'auth/invalid-email': 'El correo electrónico no es válido'
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      router.push('/')
    } catch (error) {
      setError(errorMessages[error.code] || error.message)
    }
  }

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value })

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle()
      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleResetPassword = async e => {
    e.preventDefault()
    if (!user.email) return setError('Write an email to reset password')
    try {
      await resetPassword(user.email)
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message)
    }
  }

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
            <div className='flex items-center justify-between'>
              <button
                className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
                type='submit'
              >
                Sign In
              </button>
              <a
                className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
                href='#!'
                onClick={handleResetPassword}
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <button
            onClick={handleGoogleSignin}
            className='w-full rounded border border-gray-300 bg-slate-50 px-4 py-2 text-black shadow hover:bg-slate-200'
          >
            <FcGoogle className='mr-2 inline-block text-2xl' />
            Sign in with Google
          </button>
          <div className='my-4 flex justify-between px-3 text-sm'>
            Todavía no tenés una cuenta?
            <Link
              href='/register'
              className='text-blue-700 hover:text-blue-900'
            >
              Registrate
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}