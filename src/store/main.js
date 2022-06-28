import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : false,
}

const mainState = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    },
    voteUser: (state, { payload: { uuid, qty = 1 } }) => {
      if (!state.users) return

      state.users.map((user) => {
        if (user.login.uuid === uuid) {
          if (!('vote' in user)) {
            user.vote = 0
          }
          user.vote += qty
        }
      })
    },
  },
})

export const { setUsers, voteUser } = mainState.actions
export default mainState.reducer
