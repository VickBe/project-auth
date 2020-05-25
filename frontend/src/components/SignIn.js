import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {user} from '../reducer/user'

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogIn = event => {
    event.preventDefault()

    fetch("http://localhost:8080/sessions",
      {
        method: 'POST',
        headers:{ "Content-Type": "application/json" },
        body: JSON.stringify({email, password})
          
      }).then (res => {
        if (!res.ok) {
          throw new Error('Your email and password was incorrect')
        } 
        return res.json()
      }).then(({userId, accessToken}) => {
        if (accessToken) {
          window.localStorage.setItem('accessToken', accessToken)
          window.localStorage.setItem('userId', userId)
          dispatch(user.actions.login())
          history.push('/secrets')
        }
      }).catch((err) => {
        setError(err.message)
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