import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import NotFound from './errors/NotFound'
import { Helmet } from 'react-helmet'

export default function UserDetail() {
  const { uuid } = useParams()
  const { users } = useSelector((state) => state.main)

  const existingUser = users?.find((user) => user.login.uuid === uuid) || false

  if (!existingUser) return <NotFound />

  return (
    <>
      <Helmet>
        <title>{Object.values(existingUser.name).join(' ')}</title>
      </Helmet>
      <pre>{JSON.stringify(existingUser, null, 2)}</pre>
    </>
  )
}
