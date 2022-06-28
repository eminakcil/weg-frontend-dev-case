import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from './routes'
import { useEffect } from 'react'
import { loadUsers } from './utils'

export default function App() {
  const { users } = useSelector((state) => state.main)

  useEffect(() => {
    if (!users) loadUsers()
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return useRoutes(routes)
}
