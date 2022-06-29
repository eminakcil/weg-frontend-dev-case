import { useSelector } from 'react-redux'
import UserList from '../components/UserList'
import { Helmet } from 'react-helmet'
import Dropdown from '../components/Dropdown'
import LayoutButtons from '../components/LayoutButtons'
import { sortedUsers } from '../utils'
import { useEffect, useState } from 'react'
import CircleUser from '../components/CircleUser'

export default function Home() {
  const { users } = useSelector((state) => state.main)
  const [firstUser, setFirstUser] = useState(false)

  useEffect(() => {
    setFirstUser(sortedUsers()?.[0])
  }, [users])

  return (
    <>
      <Helmet>
        <title>Çalışan Listesi</title>
      </Helmet>
      <div>
        <div className="home-heading">Ayın Elemanı</div>
        {firstUser && (
          <div>
            <CircleUser user={firstUser} />
          </div>
        )}
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
