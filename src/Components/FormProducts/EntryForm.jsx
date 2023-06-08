import * as React from 'react';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./EntryForm.css"


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function EntryForm() {
    const [productsFormData, setProductsFormData] = useState({})
    const [error, setError] = useState(false);
    const [productosLista, setProductosLista] = useState([]);
    const [category, setCategory] = React.useState('');
    const handleChange = (event) => {
        setCategory(event.target.value);
    };


  

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setProductsFormData(data)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
          setProductosLista(res);
      })
        .catch((error)=>{
         setError(true);
        })  
        }, [productsFormData]);

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <CreateIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrada de productos
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputLabel id="category-label">Categoría</InputLabel>
        <Select
        fullWidth
          labelId="category-labelid"
          id="category"
          value={category}
          label="Categoría *"
          onChange={handleChange}
        >
          <MenuItem value={"libros"}>Libros</MenuItem>
          <MenuItem value={"chops"}>Chops</MenuItem>
          <MenuItem value={"indumentaria"}>Indumentaria</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Nombre del producto"
              name="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Precio"
              id="price"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="thumbnail"
              label="URL de imagen"
              id="thumbnail"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              multiline
            rows={3}
              name="description"
              label="Descripción"
              id="description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="stock"
              label="Stock inicial"
              id="stock"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cargar producto
            </Button>

          </Box>
        </Box>
      </Container>
      <Container  maxWidth='1/1'>
      <TableContainer component={Paper}>
                <Table  aria-label="simple table">
                    <TableBody>
                        {productosLista.map((row) => (
                        <TableRow  key={row._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}  >
                            <TableCell align="center">{row.stock}</TableCell>
                            <TableCell align="center" >{row.title}</TableCell>                    
                            <TableCell align="center">${row.price}</TableCell>
                            <TableCell align="center">{row.category}</TableCell>
                            <TableCell align="center">{row.description}</TableCell>
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
        </Container>
      </>

  );
}