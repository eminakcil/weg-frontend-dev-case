import { UserService } from './services'
import store from './store'
import { setUsers } from './store/main'

export const loadUsers = () => {
  UserService.getUsers().then(({ results }) => {
    store.dispatch(setUsers(results))
  })
}
