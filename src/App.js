import { useRoutes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import routes from './routes'
import { useEffect } from 'react'
import { setUsers } from './store/main'
import { UserService } from './services'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    UserService.getUsers().then(({ results }) => dispatch(setUsers(results)))
  }, [])

  return useRoutes(routes)
}
