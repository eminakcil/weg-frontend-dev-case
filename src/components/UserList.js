import { useSelector } from 'react-redux'
import UserItem from './UserItem'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import classNames from 'classnames'

export default function UserList() {
  const { users, layout } = useSelector((state) => state.main)

  const sortedUsers = users
    ? [...users].sort((a, b) => (b?.vote || 0) - (a?.vote || 0))
    : false

  const animationConfig = {
    duration: 600,
    easing: 'ease-out',
  }

  const [animationParent] = useAutoAnimate(animationConfig)

  return (
    <>
      {sortedUsers && (
        <div
          className={classNames({
            'user-list': true,
            double: layout === 'double',
          })}
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
