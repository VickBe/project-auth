import React, {useState} from 'react'

export const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogIn = event => {
    event.preventDefault()

    fetch("http://localhost:8080/sessions",
      {
        method: 'POST',
        headers: { "Content-Type":"application/json", "Authorization":"accessToken"},
        body: JSON.stringify({userId:email, accessToken:password})
          
      }, [] ).then (()=> {
          window.location.reload()
        
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