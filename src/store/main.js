import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : false,
  layout: 'double',
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
    setLayout: (state, action) => {
      state.layout = action.payload
    },
  },
})

export const { setUsers, voteUser, setLayout } = mainState.actions
export default mainState.reducer
