import UserList from '../components/UserList'
import { Helmet } from 'react-helmet'
import Dropdown from '../components/Dropdown'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Çalışan Listesi</title>
      </Helmet>
      <div>
        <Dropdown />
        <UserList />
        {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      </div>
    </>
  )
}
