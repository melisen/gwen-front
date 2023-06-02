
import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from 'react-router-dom';
//import {doc, getDoc, getFirestore} from "firebase/firestore";

export default function ItemDetailContainer() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [itemProducto, setItemProducto] = useState({});

    let {idItem}= useParams() ;

    useEffect( ()=>{
        /*
        const db = getFirestore();
        const itemConsultadoRef = doc(db, 'productos', idItem);
        getDoc(itemConsultadoRef)
        .then((snapshot)=>{
            setItemProducto({...snapshot.data(), id: snapshot.id});
        })
        .catch((error)=> {
            setError(true);
        })
        .finally(()=>{
            setLoading(false);
        })
        */
    }, [idItem])

    return (

            <>
        {loading && <CircularProgress
            size={24}
            sx={{
            color: 'primary.main',
            position: 'absolute',
            top: '50%',
            left: '50%',
            marginTop: '-12px',
            marginLeft: '-12px',
            }}
          />}
        {error && "Hubo un error en la petición del producto"}
        {itemProducto && <ItemDetail itemProducto={itemProducto} />}
        </>

    )
}
