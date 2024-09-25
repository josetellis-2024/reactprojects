import React, { useEffect, useState } from 'react'

export default function Promisedemo() 
{
    const[data,setData]=useState([])
    useEffect(()=>
    {
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res=>res.json())
      .then(data=>setData(data))
      
      .catch(errmsg=>console.log(errmsg))
    }
    ,[])
  return (
    <div>
        <h1>
            {
            JSON.stringify(data)
            }
        </h1>
        
    </div>
  )
}
