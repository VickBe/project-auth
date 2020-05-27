import { createSlice } from '@reduxjs/toolkit'

//accessToken

const initialState = {
  isAuthorized: false,
  accessToken: '',
  email: '',
  password: '',
  // errorMessage: null

}

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    saveAccesToken: (state, action) => {
      state.accessToken = action.payload
    },
    saveUserId: (state, action) => {
      state.email= action.payload
    },
    login: (state) => { state.isAuthorized = true },
    logout: (state) => { state.isAuthorized = false }
  },
  // setErrorMessage: (state, action) => {
  //   const {errorMessage} = action.payload
  //   console.log(`Error Message: ${errorMessage}`)
  //   state.errorMessage = action.payload
  // }
})