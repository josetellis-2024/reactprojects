import React, { useState } from 'react'

export default function Formcomp() 
{
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
 const handler=(e)=>
  {
    e.preventDefault();
    console.log(username)
    console.log(password)

  }

  
  return (
    <div>
        {username}
    <form onSubmit={handler} method='post'>
    <input type='text' 
    value={username}
    onChange={(e)=>setUsername(e.target.value)}></input>
     <div>
        {password}
        <input type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}></input>
     </div>
     <input type='Submit' value="Submit"></input>
    </form>

    </div>
  )
}
