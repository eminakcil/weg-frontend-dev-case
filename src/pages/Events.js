import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../utils'
import UserItem from '../components/UserItem'
import dayjs from 'dayjs'

export default function Events() {
  const { logs } = useSelector((state) => state.main)
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Puan Günlüğü</title>
      </Helmet>
      <div className="events-heading">Puan Günlüğü</div>

      <button
        onClick={() => {
          navigate('/')
        }}
      >
        Ana Sayfa
      </button>
      <div className="events-list">
        <table className="spacing">
          <tbody>
            {logs.map((log, index) => (
              <tr key={index}>
                <td>
                  <UserItem
                    user={getUser(log.userId)}
                    vote={false}
                  />
                </td>
                <td>
                  <span className="vote-text">
                    {dayjs(log.date).format('HH:mm')}
                  </span>
                </td>
                <td>
                  <span className="vote-text">{log.vote} puan verildi</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
