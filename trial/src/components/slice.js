import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'toggle',
    initialState: {
      value: false,
    },
    reducers: {
       handle: (state) => {
        state.value = true
       }
  }})
  
  export const { handle } = loginSlice.actions
  
  export default loginSlice.reducer