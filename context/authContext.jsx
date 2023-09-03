'use client'

import { createContext, use, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
  updateProfile
} from 'firebase/auth'
import { auth } from '@/firebase/firebase'
import { useRouter } from 'next/navigation'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

const fetchUserData = async (userData, hostUrl) => {
  const response = await fetch(`${hostUrl}/users/uid/${userData.uuid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok) {
    const data = await response.json()
    return data === true
  } else {
    console.error('Error en la solicitud GET al endpoint')
    throw new Error('Error en la solicitud GET')
  }
}

const postUserData = async (userData, hostUrl) => {
  const response = await fetch(`${hostUrl}/users/createfb`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })

  if (response.ok) {
    return true
  } else {
    console.error('Error en la solicitud POST al endpoint personalizado')
    throw new Error('Error en la solicitud POST')
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL

  const signup = async (email, password, displayName) => {
    try {
      // Crea el usuario en Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      // Actualiza el displayName
      await updateProfile(userCredential.user, { displayName: displayName })

      // Construye un objeto con los datos del usuario
      const userData = {
        uuid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName.split(' ')[0],
        lastName: userCredential.user.displayName.split(' ')[1],
        active: true
      }

      const userExists = await fetchUserData(userData, hostUrl)

      if (userExists) {
        return userCredential.user
      } else {
        const createResponse = await postUserData(userData, hostUrl)

        if (createResponse) {
          return userCredential.user
        }
      }
    } catch (error) {
      console.error(
        'Error al crear el usuario o actualizar el displayName:',
        error
      )
      throw error
    }
  }

  const sendEmail = () => {
    return sendEmailVerification(auth.currentUser)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, googleProvider)

      const userData = {
        uuid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName.split(' ')[0],
        lastName: userCredential.user.displayName.split(' ')[1],
        active: true
      }

      const userExists = await fetchUserData(userData, hostUrl)

      if (userExists) {
        return userCredential.user
      } else {
        const createResponse = await postUserData(userData, hostUrl)

        if (createResponse) {
          return userCredential.user
        }
      }
    } catch (error) {
      console.error('Error al autenticar con Google:', error)
      throw error
    }
  }

  const logout = async () => {
    await signOut(auth)
    router.push('/')
  }

  const resetPassword = async email => sendPasswordResetEmail(auth, email)

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, currentUser => {
      // console.log({ currentUser })
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubuscribe()
  }, [])

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
        sendEmail
      }}
    >
      {children}
    </authContext.Provider>
  )
}
