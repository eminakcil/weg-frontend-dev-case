import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { setUsers, setLogs } from '../src/store/main'
import store from '../src/store'
import '../styles/index.scss'
import { loadUsers } from '../src/utils'

function GlobalListeners({ children }) {
  const dispatch = useDispatch()
  const { users, logs } = useSelector((state) => state.main)

  useEffect(() => {
    const localUsers = JSON.parse(localStorage.getItem('users'))

    if (localUsers) {
      dispatch(setUsers(localUsers))
    } else {
      loadUsers()
    }

    dispatch(
      setLogs(
        localStorage.getItem('logs')
          ? JSON.parse(localStorage.getItem('logs'))
          : []
      )
    )
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    localStorage.setItem('logs', JSON.stringify(logs))
  }, [logs])

  return children
}

export default function _app({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalListeners>
        <Component {...pageProps} />
      </GlobalListeners>
    </Provider>
  )
}
