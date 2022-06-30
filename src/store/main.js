import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

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

      const dateCheck = (date) =>
        dayjs(date).format('DD.MM.YYYY') ===
        dayjs(+Date.now()).format('DD.MM.YYYY')

      if (lastLog && lastLog?.userId === uuid && dateCheck(lastLog.date)) {
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
