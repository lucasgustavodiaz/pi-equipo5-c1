'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/authContext'
import Link from 'next/link'
import Alert from '@/components/alert'
import { FcGoogle } from 'react-icons/fc'
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs'
import Image from 'next/image'

export default function Login() {
  const { login, loginWithGoogle, resetPassword, user } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  })

  const [userForm, setUserForm] = useState({
    email: '',
    password: ''
  })

  const [visiblePassword, setVisiblePassword] = useState(false)

  const [error, setError] = useState('')

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
      await login(userForm.email, userForm.password)
      router.push('/')
    } catch (error) {
      setError(errorMessages[error.code] || error.message)
    }
  }

  const handleChange = ({ target: { value, name } }) =>
    setUserForm({ ...userForm, [name]: value })

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
    if (!userForm.email) return setError('Write an email to reset password')
    try {
      await resetPassword(userForm.email)
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='h-screen bg-[#f2f5fa]'>
      <div className='container flex  justify-center pt-5  sm:pt-10'>
        <div className='hidden shadow-md sm:block'>
          <Image
            src='/form/h2-luxury01.jpg'
            width={420}
            height={540}
            alt='login image'
            style={{ objectFit: 'cover' }}
            className='h-full max-h-[504] w-full max-w-[420px] rounded-s '
          />
        </div>
        <div className='w-full max-w-[420px] rounded-e rounded-s bg-white px-8 pb-6 text-sky-950 shadow-md'>
          <form onSubmit={handleSubmit} className='mb-4 pb-3 pt-6 '>
            <div className='pb-6 text-center text-2xl font-black'>
              Iniciar sesión
            </div>
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-bold text-gray-700'
              >
                Correo electrónico
              </label>
              <input
                type='email'
                name='email'
                id='email'
                onChange={handleChange}
                className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                placeholder='ejemplo@email.com'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='mb-2 block text-sm font-bold text-gray-700'
              >
                Contraseña
              </label>
              <div className='relative'>
                <input
                  type={visiblePassword ? 'text' : 'password'}
                  name='password'
                  id='password'
                  onChange={handleChange}
                  className='focus:shadow-outline  w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                  placeholder='*************'
                />
                <div
                  className='absolute right-1 top-[1.5px] cursor-pointer p-2 text-xl'
                  onClick={() => setVisiblePassword(!visiblePassword)}
                >
                  {visiblePassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between sm:gap-0'>
              <button
                className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
                type='submit'
              >
                Acceder
              </button>
              <a
                className='inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800'
                href='#!'
                onClick={handleResetPassword}
              >
                Olvidé mi contraseña
              </a>
            </div>
          </form>
          <button
            onClick={handleGoogleSignin}
            className='w-full rounded border border-gray-300 bg-slate-50 px-4 py-2 text-black shadow hover:bg-slate-200'
          >
            <FcGoogle className='mr-2 inline-block text-2xl' />
            Iniciar sesión con Google
          </button>
          <div className='my-4 flex flex-col items-center gap-3 px-3 text-sm sm:flex-row sm:justify-between sm:gap-0'>
            Todavía no tenés una cuenta?
            <Link
              href='/register'
              className='text-blue-700 hover:text-blue-900'
            >
              Registrate
            </Link>
          </div>
          {error && <Alert message={error} />}
        </div>
      </div>
    </div>
  )
}
