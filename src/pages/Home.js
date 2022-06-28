import { useSelector } from 'react-redux'
import UserList from '../components/UserList'

export default function Home() {
  const { users } = useSelector((state) => state.main)

  return (
    <div>
      <UserList />
      <pre>{JSON.stringify(users, null, 2)}</pre>
      home
    </div>
  )
}
