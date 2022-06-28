import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { voteUser } from '../store/main'
import { collectUserFullName } from '../utils'
import { plusCircle } from '../icons'

export default function UserItem({ user, number = false }) {
  const dispatch = useDispatch()

  const UserLink = ({ children }) => {
    return <Link to={`/employees/${user.login.uuid}`}>{children}</Link>
  }

  return (
    <div className="user-list-item">
      <div className="heading">
        <UserLink>
          <img
            src={user.picture.large}
            alt={collectUserFullName(user.name)}
            className="rounded square"
          />
        </UserLink>

        <div className="personal-detail">
          <UserLink>
            <span className="user-full-name">
              {number && `${number}.`} {collectUserFullName(user.name)}
            </span>
          </UserLink>
          <span>@{user.login.username}</span>
        </div>
      </div>
      <div className="center-flex">
        <span className="bold text-md">{user?.vote || 0}</span>
        <button
          onClick={() => {
            dispatch(voteUser({ uuid: user.login.uuid }))
          }}
        >
          {plusCircle}
        </button>
      </div>
    </div>
  )
}
