import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            {log.userId} kullanıcı {log.vote} oy aldı
          </li>
        ))}
      </ul>
    </>
  )
}
