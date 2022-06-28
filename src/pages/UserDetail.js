import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NotFound from './errors/NotFound'

export default function UserDetail() {
  const { uuid } = useParams()
  const { users } = useSelector((state) => state.main)

  const existingUser = users?.find((user) => user.login.uuid === uuid) || false

  if (!existingUser) return <NotFound />

  return <pre>{JSON.stringify(existingUser, null, 2)}</pre>
}
