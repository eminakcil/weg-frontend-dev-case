import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../utils'
import UserItem from '../components/UserItem'
import dayjs from 'dayjs'

export default function Events() {
  const { logs } = useSelector((state) => state.main)
  const navigate = useNavigate()

  const logsByDate = logs.reduce((acc, obj) => {
    const currDate = dayjs(obj.date).format('DD.MM.YYYY')
    if (currDate in acc) {
      acc[currDate].push(obj)
    } else {
      acc[currDate] = [obj]
    }

    return acc
  }, {})

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
        {Object.entries(logsByDate).map(([key, value]) => (
          <>
            {value.map((log, index) => (
              <div
                className="event-item"
                key={index}
              >
                <div style={{ width: 282 }}>
                  <UserItem
                    user={getUser(log.userId)}
                    vote={false}
                  />
                </div>
                <span className="vote-text">
                  {dayjs(log.date).format('HH:mm')}
                </span>
                <span className="vote-text">{log.vote} puan verildi</span>
              </div>
            ))}
            <div className="title">
              <span className="vote-date">{key}</span>
            </div>
          </>
        ))}
      </div>
    </>
  )
}
