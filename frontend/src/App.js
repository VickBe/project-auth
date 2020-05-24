import React from 'react'
import {SignUp} from './components/SignUp'
import {SignIn} from './components/SignIn'
import {Secret} from './components/Secret'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export const App = () => {
  return (
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
  )
}
