import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { Helmet } from 'react-helmet'
import { collectUserFullName, sortedUsers } from '../../src/utils'
import { voteUser } from '../../src/store/main'
import { useEffect, useState } from 'react'
import { plusCircle } from '../../src/icons'
import dayjs from 'dayjs'
import NotFound from '../404'

export default function UserDetail() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { uuid } = router.query
  const { users, storeCheck } = useSelector((state) => state.main)

  const userFinder = (user) => {
    return user.login.uuid === uuid
  }

  const existingUser = Array.isArray(users) ? users.find(userFinder) : false

  const [currentRank, setCurrentRank] = useState(0)

  useEffect(() => {
    const sortedList = sortedUsers()
    const rank = Array.isArray(sortedList)
      ? sortedList.findIndex(userFinder) + 1
      : false
    if (rank) setCurrentRank(rank)
  }, [users, existingUser])

  if (storeCheck && !existingUser) {
    return <NotFound />
  }

  const userFullName = existingUser
    ? collectUserFullName(existingUser.name)
    : false

  return (
    <>
      <Helmet>
        <title>{userFullName}</title>
      </Helmet>
      <div className="container">
        <button
          onClick={() => {
            router.push('/')
          }}
        >
          Ana Sayfa
        </button>
        {existingUser && (
          <div className="user-detail">
            <span className="image-outline rounded-full">
              <img
                src={existingUser.picture.large}
                alt={userFullName}
                className="rounded-full"
              />
            </span>
            <span>
              <button
                onClick={() => {
                  dispatch(voteUser({ uuid }))
                }}
              >
                {plusCircle}
              </button>
            </span>
            <span className="user-full-name">{userFullName}</span>
            <div className="information-grid">
              <div className="text-center center-flex-col">
                <div className="vote-count">{existingUser?.vote || 0} puan</div>
                <div className="rank">{currentRank}.</div>
              </div>
              <div className="more-detail">
                <span className="heading">İletişim Bilgileri</span>
                <ul>
                  <li>Kullanıcı adı: @{existingUser.login.username}</li>
                  <li>E-posta: {existingUser.email}</li>
                  <li>
                    <span className="block">
                      Adres: {existingUser.location.street.number}{' '}
                      {existingUser.location.street.name}
                    </span>
                    <span className="block">
                      {existingUser.location.state}{' '}
                      {existingUser.location.country}{' '}
                      {existingUser.location.postcode}
                    </span>
                  </li>
                  <li>Telefon numarası: {existingUser.phone}</li>
                  <li>Ülke: {existingUser.location.country}</li>
                  <li>
                    Doğum Tarihi:{' '}
                    {dayjs(existingUser.dob.date).format('DD.MM.YYYY')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
