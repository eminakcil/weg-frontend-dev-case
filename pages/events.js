import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { getUser } from '../src/utils'
import UserItem from '../src/components/UserItem'
import dayjs from 'dayjs'
import { Fragment } from 'react'

export default function Events() {
  const { logs } = useSelector((state) => state.main)
  const router = useRouter()

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
      <div className="container">
        <div className="events-heading">Puan Günlüğü</div>

        <button
          onClick={() => {
            router.push('/')
          }}
        >
          Ana Sayfa
        </button>
        <div className="events-list">
          {Object.entries(logsByDate).map(([key, value], index) => (
            <Fragment key={index}>
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
            </Fragment>
          ))}
        </div>
      </div>
    </>
  )
}
