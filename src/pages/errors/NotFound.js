import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>404 - Sayfa Bulunamadı</title>
      </Helmet>
      <div className="error-page">
        <div className="error-code">404</div>
        <div className="error-message">Sayfa Bulunamadı</div>
        <button
          onClick={() => {
            navigate('/')
          }}
        >
          Ana Sayfa
        </button>
      </div>
    </>
  )
}
