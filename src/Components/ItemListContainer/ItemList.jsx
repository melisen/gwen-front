
import React from 'react'
import Item from "./Item";
import "./Item.css"


export default function ItemList({productosLista}) {
      
  

  return (
    
    <div className="ItemList" style={{marginBottom:'30px'}}>
        {
          productosLista.map((item)=>
            <Item key={item._id} {...item} />
          )
        }
        
    </div>
  )
}

