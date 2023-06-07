
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [productosLista, setProductosLista] = useState([]);

  let {idCategory} = useParams();

  useEffect( ()=>{
    const ejecutarFetch = async (url) =>{
      try {
          const response = await fetch(url);
          const result = await response.json();
          return result
      } catch (error) {
          console.error(error);
      }
      }

      ejecutarFetch("./json-local/productos.json")
      .then(res => {
        if(idCategory){
          const prodCateg = res.filter(item => item.category === idCategory);
          setProductosLista(prodCateg);
        }else{
          setProductosLista(res);
        }
      })
          .catch((error)=>{
              setError(true);
          })
          .finally( ()=>{
              setLoading(false);
          })
  
      }, [idCategory]);
  /*
    useEffect( ()=>{
      const ejecutarFetch = async (url) =>{
        try {
            const response = await fetch(url);
            const result = await response.json();
            return result
        } catch (error) {
            console.error(error);
        }
        }      
        ejecutarFetch("http://localhost:8080/api/gwen")
        .then(res => {
            setProductosLista(res);
        })
        .catch((error)=>{
            setError(true);
        })
        .finally( ()=>{
            setLoading(false);
        })
    }, []);
//*por ahora vemos todos los productos
//*en array de dependencias iría idCategory porque el useEffect se ejecutaría al entrar en la url de la categoría
*/



        

  return (
    <div>

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
      {error && "Hubo un error en la petición de datos"}
      {productosLista && <ItemList productosLista={productosLista} />}
      </>

      
      
    </div>
  )
}

