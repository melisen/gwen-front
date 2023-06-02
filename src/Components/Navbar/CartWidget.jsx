//@ts-check
import React from "react";
import "./NavBar.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from 'react';
import { MyCartContext } from "../../Context/CartContext";
import {Link} from 'react-router-dom'


export default function CartWidget() {

  //const {cantItems} = useContext(MyCartContext);
  const cantItems = 0


  
  return (
    <>
    <Link to= {`/cart`} style={{ color: 'inherit', textDecoration: 'none' }}>
  <div className="cartWidget" >
    <AddShoppingCartIcon />
    <div className={cantItems===0 ? 'NoSeVe' : 'SeVe' }> <p> {cantItems}  </p> </div>
    </div>
    </Link>
    </>
    )
}
