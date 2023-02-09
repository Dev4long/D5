import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice'

export default configureStore({
  reducer: {
    toggle: loginReducer
  },
})