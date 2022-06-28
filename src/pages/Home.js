import UserList from '../components/UserList'
import { Helmet } from 'react-helmet'
import Dropdown from '../components/Dropdown'
import LayoutButtons from '../components/LayoutButtons'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Çalışan Listesi</title>
      </Helmet>
      <div>
        <div className="button-group">
          <Dropdown />
          <LayoutButtons />
        </div>
        <UserList />
        {/* <pre>{JSON.stringify(users, null, 2)}</pre> */}
      </div>
    </>
  )
}
