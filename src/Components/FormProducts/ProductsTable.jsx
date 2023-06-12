import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./EntryForm.css"

export default function ProductsTable({productosLista}) {
  return (
    <TableContainer component={Paper} sx={{backgroundColor:'#4a2222'}}>
    <Table  aria-label="simple table">
    <TableHead sx={{fontSize:'1.2rem'}}>
      <TableRow>

        <TableCell align="center" sx={{fontSize:'1.2rem', color:'secondary.main', fontFamily:'Modern Antiqua'}}>STOCK</TableCell>
        <TableCell align="center" sx={{fontSize:'1.2rem', color:'secondary.light', fontFamily:'Modern Antiqua'}}>PRODUCTO</TableCell>
        <TableCell align="center" sx={{fontSize:'1.2rem', color:'secondary.main', fontFamily:'Modern Antiqua'}}>PRECIO</TableCell>
        <TableCell align="center" sx={{fontSize:'1.2rem', color:'secondary.light', fontFamily:'Modern Antiqua'}}>CATEGORÍA</TableCell>
        <TableCell align="center" sx={{fontSize:'1.2rem', color:'secondary.light', fontFamily:'Modern Antiqua'}}>DESCRIPCIÓN</TableCell>
        <TableCell align="center" sx={{fontSize:'1.2rem', color:'secondary.light', fontFamily:'Modern Antiqua'}}>FOTO</TableCell>
      </TableRow>
    </TableHead>
        <TableBody>

            {productosLista.map((row) => (
            <TableRow  key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0,  } }}  >
                <TableCell align="center" sx={{ fontSize:'1.3rem', color:'secondary.main'}}>{row.stock}</TableCell>
                <TableCell align="center"  sx={{fontSize:'1.1rem', color:'secondary.light'}}>{row.title}</TableCell>                    
                <TableCell align="center" sx={{fontSize:'1.2rem', color:'secondary.main'}}>$ {row.price}</TableCell>
                <TableCell align="center" sx={{fontSize:'1.1rem', color:'secondary.light'}}>{row.category}</TableCell>
                <TableCell align="center" sx={{color:'secondary.light'}}>{row.description}</TableCell>
                <TableCell align="center"> 
                    <img
                           src={row.thumbnail}
                           height={100}
                           alt={row.title}
                           loading="lazy"
                        >
                    </img>
                </TableCell>                           

            </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
  )
}
