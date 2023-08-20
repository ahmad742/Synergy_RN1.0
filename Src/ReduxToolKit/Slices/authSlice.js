import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignIn: false,
  token: null,
  user: ''
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userSignIn: (state, payload) => {
      state.isSignIn = true,
        state.token = payload
    },
    userSignOut: (state) => {
      state.isSignIn = false,
        state.token = null
    },
    userInfo: (state, payload) => {
      state.user = payload
    }

  },
})

export const { userSignIn, userSignOut, userInfo } = authSlice.actions

export default authSlice.reducer