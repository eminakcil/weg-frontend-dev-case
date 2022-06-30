import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: false,
  layout: 'double',
  logs: [],
  storeCheck: false,
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

      const lastLog = state.logs?.[state.logs.length - 1]

      if (lastLog && lastLog?.userId === uuid) {
        lastLog.vote += qty
      } else {
        state.logs.push({
          userId: uuid,
          vote: qty,
          date: +Date.now(),
        })
      }
    },
    setLayout: (state, action) => {
      state.layout = action.payload
    },
    setLogs: (state, action) => {
      state.logs = action.payload
    },
    setStoreCheck: (state, action) => {
      state.storeCheck = action.payload
    },
  },
})

export const { setUsers, voteUser, setLayout, setLogs, setStoreCheck } =
  mainState.actions
export default mainState.reducer
