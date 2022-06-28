import Home from './pages/Home'
import UserDetail from './pages/UserDetail'
import NotFound from './pages/errors/NotFound'

/** @type {import("react-router-dom").RouteObject[]} */
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/employees/:uuid',
    element: <UserDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default routes
