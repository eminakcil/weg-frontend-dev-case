import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { voteUser } from '../store/main'

export default function UserItem({ user }) {
  const dispatch = useDispatch()
  return (
    <li>
      <Link to={`/employees/${user.login.uuid}`}>{user.name.first}</Link>
      <button
        onClick={() => {
          dispatch(voteUser({ uuid: user.login.uuid }))
        }}
      >
        vote {user?.vote || 0}
      </button>
    </li>
  )
}
