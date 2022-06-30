import { Helmet } from 'react-helmet'
import { useRouter } from 'next/router'

export default function NotFound() {
  const router = useRouter()

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
            router.push('/')
          }}
        >
          Ana Sayfa
        </button>
      </div>
    </>
  )
}
