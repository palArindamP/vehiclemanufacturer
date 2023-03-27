import React from 'react'

const Popup =() =>{
  return (
    <div>
        {data.map((item) => (
                    <ul key={item.id}>
                        <li >{item.name}</li>
                        <li >{item.ceo}</li>
                        <li >{item.address}</li>
                        <li >{item.state}</li>
                    </ul>
                ))}
    </div>
  )
}

export default Popup
