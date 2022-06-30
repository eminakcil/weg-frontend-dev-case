import { useRouter } from 'next/router'
import { collectUserFullName } from '../utils'
import Stars from './Stars'

export default function CircleUser({ user }) {
  const router = useRouter()
  const userFullName = collectUserFullName(user.name)

  return (
    <div className="circle-user">
      <div className="user-card">
        <span className="user-card-text">{userFullName}</span>
        <span
          onClick={() => {
            router.push(`/employees/${user.login.uuid}`)
          }}
          className="image-outline rounded-full pointer"
        >
          <img
            src={user.picture.large}
            alt={userFullName}
            className="rounded-full"
          />
        </span>
        <div className="stars">
          <Stars />
          <div style={{ paddingBottom: 12 }}>
            <Stars />
          </div>
          <Stars />
        </div>
      </div>
    </div>
  )
}
