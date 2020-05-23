import React, {useState} from 'react'


export const SignUp = () => {
  const [userName, setUserName]= useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  const handleSubmit = event => {
    event.preventDefault()

    fetch("http://localhost:8080/users",
      {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name:userName, email:email, password:password})
          
      }, [] ).then (()=> {
          window.location.reload()
        
      })
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type= "text"
          value={userName}
          onChange={event => setUserName(event.target.value)}
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

