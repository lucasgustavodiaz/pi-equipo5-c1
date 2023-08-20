import { useAuth } from '@/context/authContext'
import { useRouter } from 'next/navigation'

export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  if (loading) return <h1 className='container h-screen'>Cargando...</h1>

  if (!user) return router.push('/')

  return <>{children}</>
}
