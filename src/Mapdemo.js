import React from 'react'

function Mapdemo() 
{
  let product=[
    {
        id:1,
        qty:10,
        price:100
    }
  ]
  
    return (
        
    <div>
        {product.map((prod)=>(
        <li key={prod.id}>{prod.qty}-{prod.price}</li>    
        ))}
    </div>
  )
}

export default Mapdemo