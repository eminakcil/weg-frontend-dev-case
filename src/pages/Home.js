import { useSelector } from 'react-redux'
import { loadUsers } from '../utils'
import UserList from '../components/UserList'

export default function Home() {
  const { users } = useSelector((state) => state.main)

  return (
    <div>
      <button onClick={loadUsers}>Reload Users</button>
      <UserList />
      <pre>{JSON.stringify(users, null, 2)}</pre>
      home
    </div>
  )
}
