import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { user } from 'reducer/user'
import { useHistory } from 'react-router-dom'


export const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()


  const handleSignUp = event => {
    event.preventDefault()

    fetch("http://localhost:8080/users",
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })

      })
      .then((res) => {
        if (!res.ok) {
          console.log('error in signup page')
        } else {
          return res.json()
        }
      }).then(({ email, password }) => {
        
          window.localStorage.setItem('password', password)
          window.localStorage.setItem('email', email)
          dispatch(user.actions.login())
          history.push('/sign-in')
      })
      .catch((err) => {
        // här kommer inte något felmeddelande om man fyller i en redan existerade person. 
        console.log('else? är det ett errror nu?')
      })

    
   // dispatch(user.actions.logout())
  }


  return (
    <form onSubmit={handleSignUp}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
          required>
        </input>
      </label>
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
        value='Sign up'
        className='sign-up-button'>
      </input>

    </form>
  )
}

