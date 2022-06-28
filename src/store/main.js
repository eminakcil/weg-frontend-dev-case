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
  },
})

export const { setUsers } = mainState.actions
export default mainState.reducer
