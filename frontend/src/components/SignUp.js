import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { user } from 'reducer/user'
import { useHistory } from 'react-router-dom'


export const SignUp = () => {
  const [name, setName]= useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()


  const handleSignUp = event => {
    event.preventDefault()
    if (password) {
    fetch("http://localhost:8080/users",
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name, email, password})
          
      })
      .then((res) => {
        if(!res.ok) {
          throw new Error ('Incorrect email or password')
        }
        return res.json()
      }).then(({ userId, accessToken}) => {
        if (accessToken) {
          window.localStorage.setItem('accessToken', accessToken)
          window.localStorage.setItem('userId', userId)
          dispatch(user.actions.login())
        }
      }).then(() => history.push('/sign-in'))
    } else {
      setError(true)
    }
  }

  

  
  return (
    <form onSubmit={handleSignUp}>
      <label>
        Name
        <input
          type= "text"
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

