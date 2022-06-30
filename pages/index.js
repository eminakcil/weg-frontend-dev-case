import { useSelector } from 'react-redux'
import UserList from '../src/components/UserList'
import { Helmet } from 'react-helmet'
import Dropdown from '../src/components/Dropdown'
import LayoutButtons from '../src/components/LayoutButtons'
import { sortedUsers } from '../src/utils'
import { useEffect, useState } from 'react'
import CircleUser from '../src/components/CircleUser'

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
        {firstUser && firstUser?.vote && (
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
