import { UserService } from './services'
import store from './store'
import { setUsers, setLogs } from './store/main'

export const loadUsers = () => {
  UserService.getUsers().then(({ results }) => {
    store.dispatch(setUsers(results))
    store.dispatch(setLogs([]))
  })
}

export const collectUserFullName = (nameList) =>
  Object.values(nameList).join(' ')

export const sortedUsers = () => {
  const {
    main: { users },
  } = store.getState()

  return users
    ? [...users].sort((a, b) => (b?.vote || 0) - (a?.vote || 0))
    : false
}
