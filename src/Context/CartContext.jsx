import React from 'react';
import { createContext,  useState } from 'react';

export const MyCartContext = createContext();

export default function CartContext({children}) {
    const [cart, setCart] = useState(() => {
        try{
            const hayProductos = localStorage.getItem('cart')
            return hayProductos ? JSON.parse(hayProductos) : []
        }catch{
            return []
        }
    });
    const [cantItems, setCantItems] =useState(0);
    const [importeTotal, setImporteTotal] = useState(0)
    const [condicionCartVacio, setCondicionCartVacio] = useState(true)

    const isInCart = (id) => {
        let carritoStorage =  cart;
        return carritoStorage.find((el) => el.id === id);
    }
    
    function addItem(item, quantity) {
        setCondicionCartVacio(false)
        if(isInCart(item.id)){
            let nuevoCart = JSON.parse(localStorage.getItem('cart')); 
            let indexProducto = nuevoCart.findIndex(element=> element.id === item.id); 
            nuevoCart[indexProducto].quantity = Number(nuevoCart[indexProducto].quantity) + Number(quantity); 
            setCart(nuevoCart); 
            setCantItems(nuevoCart.reduce((acc, element)=> acc + element.quantity, 0));
            setImporteTotal( nuevoCart.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );

            
          }else{
            const nuevoCarrito = [...cart, {...item, quantity:quantity }];
            setCart(nuevoCarrito)
            setCantItems(nuevoCarrito.reduce((acc, element)=> acc + element.quantity, 0));
            setImporteTotal( nuevoCarrito.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );
          }
    }



    function removeItem(itemId) {
        const nuevoCarrito = cart.filter((el) => el.id !== itemId );
        nuevoCarrito===[] && setCondicionCartVacio(true);
        setCart(nuevoCarrito)
        localStorage.setItem('cart', JSON.stringify(nuevoCarrito))    
        setCantItems(nuevoCarrito.reduce((acc, element)=> acc + element.quantity, 0));
        setImporteTotal( nuevoCarrito.reduce((acc, elemento) => acc + elemento.price*elemento.quantity, 0) );
    }


    function clear() {
        const nuevoCarrito=[];
        setCart(nuevoCarrito);
        localStorage.setItem('cart', JSON.stringify(nuevoCarrito))    
        setCantItems(0);
        setCondicionCartVacio(true)
        setImporteTotal(0)
;        
    }


    
    return (
        <>
            <MyCartContext.Provider value={{ cantItems, cart, addItem, removeItem, clear, condicionCartVacio, importeTotal}}>
                {children}
            </MyCartContext.Provider>
        </>
    );
    }

