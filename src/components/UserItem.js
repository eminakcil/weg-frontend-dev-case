import { useDispatch } from 'react-redux'
import { voteUser } from '../store/main'

export default function UserItem({ user }) {
  const dispatch = useDispatch()
  return (
    <li>
      {user.name.first}
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
