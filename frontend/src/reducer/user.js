import { createSlice } from '@reduxjs/toolkit'

//accessToken

const initialState = {
  isAuthorized: false,
}

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state) => { state.isAuthorized = true},
    logout: (state) => { state.isAuthorized = false}
  }
})