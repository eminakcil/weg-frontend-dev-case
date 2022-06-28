import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: false,
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
