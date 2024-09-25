import React, { useContext } from 'react'
import { mydata } from '../App'
export default function ChildA() 
{
 const data=useContext(mydata)
    return (
    <div>ChildA
        {data}
    </div>
  )
}
