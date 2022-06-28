import { useSelector } from 'react-redux'
import UserItem from './UserItem'
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function UserList() {
  const { users } = useSelector((state) => state.main)

  const sortedUsers = users
    ? [...users].sort((a, b) => (b?.vote || 0) - (a?.vote || 0))
    : false

  const [animationParent] = useAutoAnimate({
    duration: 600,
    easing: 'ease-out',
  })

  return (
    <>
      {sortedUsers && (
        <div
          className="user-list"
          ref={animationParent}
        >
          {sortedUsers.map((user, index) => (
            <UserItem
              user={user}
              key={user.login.uuid}
              number={index + 1}
            />
          ))}
        </div>
      )}
    </>
  )
}
