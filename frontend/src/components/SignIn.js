import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {user} from '../reducer/user'

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogIn = event => {
    event.preventDefault()

    //console.log the error messages, see where the wrong line of code is. 

    fetch("http://localhost:8080/sessions",
      {
        method: 'POST',
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({email, password})
          
      })
      .then (res => {
        if (!res.ok) {
          console.log('respons not Ok in signin.js')
        } else {           
          console.log('response ok in signin.js')
          return res.json()
        }
          
        
      }).then(({accessToken}) => {
        if (accessToken) {
          dispatch(user.actions.login())
          dispatch(user.actions.saveAccesToken(accessToken))
          history.push('/secrets')
          console.log('yey its working', accessToken)
        }
      }).catch((err) => {
        //console.log this as well!
        console.log('error in catch singin.js')
        
      })
        
      
  }

  return (
<form onSubmit={handleLogIn}>
      
      <label>
        Email
        <input 
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required>
        </input>
      </label>
      <label>
        Password
        <input 
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          required>
        </input>
      </label>
      <input
        type='submit'
        value='Sign in'
        className='sign-in-button'>
      </input>
      
    </form>
  )
}