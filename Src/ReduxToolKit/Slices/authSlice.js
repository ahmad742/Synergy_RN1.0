import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignIn:false,
  token:null
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    userSignIn: (state,payload) => { 
      state.isSignIn = true,
      state.token=payload
    },
    userSignOut: (state) => {
      state.isSignIn = false,
      state.token=null
    },
   
  },
})

export const { userSignIn, userSignOut,  } = authSlice.actions

export default authSlice.reducer