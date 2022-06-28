import { useRoutes, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import routes from './routes'
import { useEffect } from 'react'
import { loadUsers } from './utils'

export default function App() {
  const location = useLocation()
  const { users } = useSelector((state) => state.main)

  useEffect(() => {
    if (!users) loadUsers()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return <div className="container">{useRoutes(routes)}</div>
}
