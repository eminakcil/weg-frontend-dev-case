import { loadUsers } from '../utils'
import UserList from '../components/UserList'
import { Helmet } from 'react-helmet'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <button onClick={loadUsers}>Reload Users</button>
        <UserList />
        {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      </div>
    </>
  )
}
