import React  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useContext } from 'react';
import { MyCartContext } from '../../Context/CartContext';
import "./CheckOut.css"
import { Button, Typography } from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TextField from '@mui/material/TextField';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function CheckOut() {
    
    const {cart, importeTotal, clear} = useContext(MyCartContext);
    

    const [name, setName] = useState(() => {
            const hayNombre = localStorage.getItem('name')
            return hayNombre ? JSON.parse(hayNombre) : ""
            });
    const [phone, setPhone] = useState(() => {
        const hayTel = localStorage.getItem('phone')
        return hayTel ? JSON.parse(hayTel) : ""
        });
    const [email, setEmail] = useState(()=>{
        const hayEmail = localStorage.getItem('email')
        return hayEmail ? JSON.parse(hayEmail) : ""
        });
    const [open, setOpen] = React.useState(false);
    const [mostrarCodigo, setMostrarCodigo] = useState(false)
    const [codigo, setCodigo] = useState(()=>{
        const hayCodigo = localStorage.getItem('codigo')
        return hayCodigo ? JSON.parse(hayCodigo) : ""
        });

    

        function handleClickComprar(){
            const pedido = { 
                buyer: { name, phone, email}, 
                items: [...cart], 
                date: Date(), 
                total: importeTotal  }
            const db = getFirestore();
            const collectionPedidosRef= collection(db, 'pedidos')
            addDoc(collectionPedidosRef, pedido).then(({id})=>  setCodigo(id));
            clear();
            clearForm();
            setMostrarCodigo(true)
        }

        function CamposValidados(){
            if(name==="" || phone==="" || email===""){
                setOpen(true)
             }else {
                handleClickComprar();
                
            }
        }

          function validarEmail(valor){
            let re = /\S+@\S+\.\S+/;
            if(  re.test(valor)  && (valor!=="")){
                setEmail(valor)
                localStorage.setItem('email', JSON.stringify(valor))    
            }
          }
          
          function validarName(valor){            
            if( (/^[A-z ]+$/.test(valor)) && (valor!=="") ){
            setName(valor)
            localStorage.setItem('name', JSON.stringify(valor))    
            } 
          }

          function validarPhone(valor){
            let numTel = /^\d{8,12}$/;
            if( valor.match(numTel)  && (valor!=="") ){
                setPhone(valor)
                localStorage.setItem('phone', JSON.stringify(valor))    
            }
          }
          function clearForm(){
            setName("");
            localStorage.setItem('name', JSON.stringify(""))    
            setEmail("");
            localStorage.setItem('email', JSON.stringify(""))    
            setPhone("")
            localStorage.setItem('phone', JSON.stringify(""))    
          }

        const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }
            setOpen(false);
        };

        const action = (
            <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="primary"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
            </React.Fragment>
        );


  return (
    <>
    <div className='divCheckout'>
        <Typography  style={{color:'#e0f193d7', textAlign:'center', margin:'1rem'}} variant="h4"> Resumen de compra </Typography>
        <div className='Columnas'>
            <Paper className='divFormulario'>
                <Typography variant="h5" style={{color:'#e0f193d7', textAlign:'center'}}>Productos</Typography>
            <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableBody>
                        {cart.map((row) => (
                        <TableRow  key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
                            <TableCell align="center">{row.quantity}</TableCell>
                            <TableCell align="center" sx={{ width:7/10 }}>{row.title}</TableCell>                    
                            <TableCell align="center">${row.price}</TableCell>
        
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            </Paper>
            <Paper  className='divFormulario'>
                <Typography variant="h5" style={{color:'#e0f193d7', textAlign:'center'}}>Datos personales</Typography>
                <TextField 
                onChange={(e)=>{
                    
                    validarName(e.target.value)
                    
                    }} variant="outlined" type={"text"} placeholder={"Nombre"} sx={{ width:8/10, margin:'0.7rem' }}/>
                <TextField 
                onChange={(e)=> {validarPhone(e.target.value)}}  variant="outlined" type={"tel"} placeholder={"Tel"} sx={{ width:8/10, margin:'0.7rem' }} />
                <TextField  
                onChange={(e)=> validarEmail(e.target.value)}   variant="outlined" type={"email"} placeholder={"Email"} sx={{ width:8/10, margin:'0.7rem' }}/>
                <Snackbar sx={{backgroundColor:'primary.main'}}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message="Debe completar todos los campos correctamente para confirmar la compra"
                    action={action}
                />
                <Button onClick={()=>{
                    CamposValidados()
                }} variant="contained">Confirmar compra</Button>
            </Paper>
        </div>
        <div className={mostrarCodigo? 'seVe': 'noSeVe'}>
            <Paper className='divCodigo'>
                <Typography style={{fontSize:'1.2rem'}}> <AddTaskIcon/> El código de su compra es:</Typography>
                <div className='codigoStyle'> <span>{codigo} </span>  </div>
                <Typography style={{textAlign:'center'}}> Chequee su correo para ver el seguimiento de su pedido</Typography>
            </Paper >
        </div>
    </div>

    </>
  )
}
