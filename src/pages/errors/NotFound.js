import { Helmet } from 'react-helmet'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Not found</title>
      </Helmet>
      <div>Page not found!</div>
    </>
  )
}
