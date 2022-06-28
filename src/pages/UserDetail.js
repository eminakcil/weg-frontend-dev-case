import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import NotFound from './errors/NotFound'
import { Helmet } from 'react-helmet'
import { collectUserFullName, sortedUsers } from '../utils'
import { voteUser } from '../store/main'
import { useEffect, useState } from 'react'

export default function UserDetail() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { uuid } = useParams()
  const { users } = useSelector((state) => state.main)

  const userFinder = (user) => {
    return user.login.uuid === uuid
  }

  const existingUser = users?.find(userFinder) || false

  const [currentRank, setCurrentRank] = useState(0)

  useEffect(() => {
    const rank = sortedUsers()?.findIndex(userFinder) + 1
    setCurrentRank(rank)
  }, [existingUser])

  if (!existingUser) return <NotFound />

  const userFullName = collectUserFullName(existingUser.name)

  return (
    <>
      <Helmet>
        <title>{userFullName}</title>
      </Helmet>
      <button
        onClick={() => {
          navigate('/')
        }}
      >
        Ana Sayfa
      </button>
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
            vote
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
                  {existingUser.location.state} {existingUser.location.country}{' '}
                  {existingUser.location.postcode}
                </span>
              </li>
              <li>Telefon numarası. {existingUser.phone}</li>
              <li>Ülke: {existingUser.location.country}</li>
              <li>Doğum Tarihi: {existingUser.dob.date}</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(existingUser, null, 2)}</pre> */}
    </>
  )
}
