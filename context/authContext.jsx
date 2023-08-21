'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification
} from 'firebase/auth'
import { auth } from '@/firebase/firebase'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // La cuenta se ha creado correctamente, ahora envía el correo de verificación.
        const user = userCredential.user
        return sendEmailVerification(user)
      })
      .then(() => {
        // El correo de verificación se ha enviado correctamente.
        console.log('Se ha enviado un correo de verificación')
      })
      .catch(error => {
        // Maneja los errores de creación de cuenta o envío de correo.
        console.error('Error al crear la cuenta:', error)
      })
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const logout = () => signOut(auth)

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
        resetPassword
      }}
    >
      {children}
    </authContext.Provider>
  )
}
