import React from 'react'
import {SignUp} from './components/SignUp'
import {SignIn} from './components/SignIn'
import {Secret} from './components/Secret'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {user} from './reducer/user'


const reducer = combineReducers({
  user: user.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <SignUp />
              <a href="/sign-in">Sign in?</a>
            </Route>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/secrets" >
              <Secret />
            </Route> 
          </Switch>
        </BrowserRouter>
      </main>
    </Provider>
  )
}


// How to make the secret page secret? 
// How to get session info on mongo
// How to make error messages in front end 
