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

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const signup = (email, password, displayName) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Una vez que el usuario se ha creado correctamente, actualiza el displayName
        return updateProfile(userCredential.user, { displayName: displayName })
          .then(() => {
            // Devuelve el usuario actualizado con el displayName
            return userCredential.user
          })
          .catch(error => {
            // Maneja los errores al actualizar el displayName
            console.error('Error al actualizar el displayName:', error)
            throw error
          })
      })
      .catch(error => {
        // Maneja los errores al crear el usuario
        console.error('Error al crear el usuario:', error)
        throw error
      })
  }

  const sendEmail = () => {
    return sendEmailVerification(auth.currentUser)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const logout = () => {
    return signOut(auth).then(() => {
      router.push('/')
    })
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
