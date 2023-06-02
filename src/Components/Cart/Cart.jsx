import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import { MyCartContext } from '../../Context/CartContext';
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Cart.css";
import {Link} from 'react-router-dom';







export default function Cart() {
    
    const {cart, removeItem, clear, condicionCartVacio, importeTotal} = useContext(MyCartContext);  
  

  return (
    <>
    <div className="divCart">
      <Typography  style={{color:'#e0f193d7', textAlign:'center', margin:'2rem'}} variant="h4"> Carrito </Typography>

      <TableContainer component={Paper} sx={{ width:8/10, borderRadius:'15px' }}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell ></TableCell>
            <TableCell sx={{ width:5/10,}} align="center">Producto</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center">Subtotal</TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" >
                <img  style={{width:'3rem'}} src={row.pictureURL} alt={row.title}/>               
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="center">$ {row.price}</TableCell>
              <TableCell align="center">$ {row.price*row.quantity}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center"><Button variant="contained" onClick={()=>{removeItem(row.id)}} > <DeleteForeverIcon/> </Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        <div className={condicionCartVacio ? 'SeVe' : 'NoSeVe'}>
          <div  style={{backgroundColor:'#283322', borderRadius:'10px', padding:'10px', display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography variant="h5" style={{color:'#e0f193d7', fontFamily:'Joan', textAlign:'center'}}> Tu carrito está vacío, te invitamos a conocer nuestros productos. </Typography>
            <Button variant="contained"> <Link to={"/"}  style={{ color: 'inherit', textDecoration: 'none' }}> Comenzar a comprar</Link> </Button>
          </div>
        </div>
        <div className={condicionCartVacio ? 'NoSeVe' : 'SeVe'}>
          <div className="divFinalizarCompra">
            <Typography style={{color:'#e0f193d7', textAlign:'center'}} variant="h5">
              Importe total  $ {importeTotal}
            </Typography>
            <Stack spacing={2} direction="row">
              <Button variant="contained"> <Link to='/checkout' style={{ color: 'inherit', textDecoration: 'none' }}> Finalizar compra</Link></Button>
              <Button variant="outlined" onClick={()=>{  clear()}}  sx={{ color:'secondary.main'}}> Vaciar carrito</Button>
            </Stack>
          </div>
        </div>

    </div>

    </>
  );


    
}

