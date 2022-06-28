import { useRoutes } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import routes from './routes'
import { useEffect } from 'react'
import { setUsers } from './store/main'
import { UserService } from './services'

export default function App() {
  const { users } = useSelector((state) => state.main)
  const dispatch = useDispatch()

  useEffect(() => {
    UserService.getUsers().then(({ results }) => dispatch(setUsers(results)))
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  return useRoutes(routes)
}
