import Home from './pages/Home'
import NotFound from './pages/errors/NotFound'

/** @type {import("react-router-dom").RouteObject[]} */
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
