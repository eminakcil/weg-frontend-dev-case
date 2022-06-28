import { useSelector } from 'react-redux'
import UserItem from './UserItem'

export default function UserList() {
  const { users } = useSelector((state) => state.main)

  const sortedUsers = users
    ? [...users].sort((a, b) => (b?.vote || 0) - (a?.vote || 0))
    : false

  return (
    <>
      {sortedUsers && (
        <ul>
          {sortedUsers.map((user) => (
            <UserItem
              user={user}
              key={user.login.uuid}
            />
          ))}
        </ul>
      )}
    </>
  )
}
