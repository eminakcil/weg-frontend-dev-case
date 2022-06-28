import { useRoutes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import routes from './routes'
import { useEffect } from 'react'
import { setUsers } from './store/main'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUsers([]))
  }, [])

  return useRoutes(routes)
}
