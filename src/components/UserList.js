import { useSelector } from 'react-redux'
import UserItem from './UserItem'

export default function UserList() {
  const { users } = useSelector((state) => state.main)

  return (
    <>
      {users && (
        <ul>
          {users.map((user) => (
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
