import { configureStore } from '@reduxjs/toolkit'
import main from './main'

const store = configureStore({
  reducer: {
    main,
  },
})

export default store
