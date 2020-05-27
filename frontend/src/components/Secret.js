import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

// fetch sessions
// useEffect
// authorized? if not re-direct to home page
// accessToken, connect to redux 

export const Secret = () => {
  const accessToken = useSelector((state) => (state.user.accessToken))
  const history = useHistory()

  useEffect(() => {
    fetch("http://localhost:8080/secrets", {
      headers: {
        Authorization: accessToken
      }
      })
      .then((res) => {
        if (!res.ok) {
           throw('error in secrets')
            
        } return
         res.json() 
         console.log('secrets res ok?') 
        
      }, [accessToken])
      .catch((err) => {
        history.push('/sign-in')
      })
  })

  return (
    <h1>Secret</h1>
  )
}