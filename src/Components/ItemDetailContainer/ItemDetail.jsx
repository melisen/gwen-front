import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./ItemDetail.css"
import ItemCount from './ItemCount/ItemCount'

import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyCartContext } from "../../Context/CartContext";



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#283322',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  margin:theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.secondary,
}));

const ItemEstiloBotonera = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  ...theme.typography.h4,
  padding: theme.spacing(1),
  margin:theme.spacing(0),
  textAlign: 'center',
  color: '#283322',
}));

const ItemTexto = styled(Paper)(({ theme }) => ({
  backgroundColor: '#283322',
  ...theme.typography.body1,
  padding: theme.spacing(1),
  margin:theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.secondary,
}));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
}); 

export default function ItemDetail({itemProducto}) {

  const {addItem} = useContext(MyCartContext);
  const [cambiarBotones, setCambiarBotones] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [msgSnackbar, setMsgSnackbar] = useState("")
  
 
  
  
    
  function onAdd(productos, cantidadStock){
        if((productos>0)&&(cantidadStock>0)){ 
          addItem(itemProducto, productos);
          setOpen(true)
          setMsgSnackbar("¡Agregaste  " +JSON.stringify(productos)+"  de  "+itemProducto.title+"  al carrito!")
        }
      }

      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
      }


  return (
    <Box sx={{marginBottom:'30px', flexGrow: 1 }} >
      <div className='itemDetail'>
        <div className="columnaImagen">
            <img src={itemProducto.pictureURL} alt={itemProducto.title} className="imagenDetail"/>
        </div>
        <div item xs={6} className='columnaInfo'>
          <Item>{itemProducto.title}</Item>
          <ItemEstiloBotonera className="divItemCount" >   
              <Typography variant='h4'> $ {itemProducto.price} </Typography>
              {cambiarBotones && < AddShoppingCartIcon sx={{ fontSize: 60 }}/>} 
              {!cambiarBotones && <ItemCount   stock={itemProducto.stock}  initial={1}  onAdd={onAdd}  setCambiarBotones={setCambiarBotones} />} 
              <div className={cambiarBotones ? 'seVeBoton' : 'NoSeVeBoton'}>
                <Button   sx={{ backgroundColor: 'primary.main', color:'secondary.main',  '&:hover':{backgroundColor: '#283322'}}}> 
                    <Link to={'/cart'} style={{ color: 'inherit', textDecoration: 'none' }} >  Terminar mi compra </Link> 
                </Button> 
              </div>
          </ItemEstiloBotonera>
          <ItemTexto>Stock disponible: {itemProducto.stock}</ItemTexto>
          <ItemTexto>{itemProducto.description}</ItemTexto>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose}  sx={{ backgroundColor:'primary.main' }} >
          {msgSnackbar}
        </Alert>
      </Snackbar>
    </Box>
  );
}

