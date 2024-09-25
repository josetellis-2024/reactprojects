import React, { useState } from 'react'

export default function Demousestate() 
{
  const[data,setData]=useState(0);
  
    return (
    <div>Clicked {data}
    <button onClick={()=>setData(data+1)}>Click</button>
    </div>
  )
}
