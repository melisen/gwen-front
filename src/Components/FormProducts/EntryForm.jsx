import * as React from 'react';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import "./EntryForm.css"
import ProductsTable from './ProductsTable';



export default function EntryForm() {
    const [productFormData, setProductFormData] = useState({})
    const [error, setError] = useState(false);
    const [productosLista, setProductosLista] = useState([]);

    const [category, setCategory] = useState(() => {
      const guardarLocal = localStorage.getItem('category')
      return guardarLocal ? JSON.parse(guardarLocal) : ""
      });
    const [title, setTitle] = useState(() => {
      const guardarLocal = localStorage.getItem('title')
      return guardarLocal ? JSON.parse(guardarLocal) : ""
      });
    const [price, setPrice] = useState(() => {
      const guardarLocal = localStorage.getItem('price')
      return guardarLocal ? JSON.parse(guardarLocal) : ""
      });
    const [thumbnail, setThumbnail] = useState(() => {
      const guardarLocal = localStorage.getItem('thumbnail')
      return guardarLocal ? JSON.parse(guardarLocal) : ""
      });
    const [description, setDescription] = useState(() => {
      const guardarLocal = localStorage.getItem('description')
      return guardarLocal ? JSON.parse(guardarLocal) : ""
      });
    const [stock, setStock] = useState(() => {
      const guardarLocal = localStorage.getItem('stock')
      return guardarLocal ? JSON.parse(guardarLocal) : ""
      });
    

    const categories = [
      {
        value:'libros',
        label: 'Libros'
      },
      {
        value:'chops',
        label: 'Chops'
      },
      {
        value:'indumentaria',
        label: 'Indumentaria'
      }
    ]


    function clearForm(){
      setCategory("");
      localStorage.setItem('category', JSON.stringify(""));        
      setTitle("");
      localStorage.setItem('title', JSON.stringify(""));
      setPrice("");
      localStorage.setItem('price', JSON.stringify(""));    
      setThumbnail("");
      localStorage.setItem('thumbnail', JSON.stringify(""));    
      setDescription("");
      localStorage.setItem('description', JSON.stringify(""));    
      setStock("");
      localStorage.setItem('stock', JSON.stringify(""));    
      
    }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      title: title,
      price: price,
      category: category,
      thumbnail: thumbnail,
      description: description,
      stock: stock,
    }
    setProductFormData(newProduct)
    fetch("http://localhost:8080/api/gwen", {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: {
        'Content-Type': "application/json"
      },
    })
    .then(resp => {
      if (resp.status === 200) {
        console.log( resp.json())
        clearForm() 
      };
    })
  }

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
      ejecutarFetch('http://localhost:8080/api/gwen')
      .then(res => {
          setProductosLista(res);
      })
        .catch((error)=>{
         setError(true);
        })  
        }, [productFormData]);

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
          <Typography component="h1" variant="h1" my={2} sx={{color:'secondary.dark'}}>
            Entrada de productos
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>

        <FormHelperText>Required</FormHelperText>
        <TextField
          margin="normal"
          required
          fullWidth
          id="category"
          name="category"
          select
          label="Select"
          defaultValue=""
          helperText="Categoría"
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Nombre del producto"
              name="title"
              inputProps={{ maxLength: 56 }}
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Precio"
              id="price"
              type='number'
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="thumbnail"
              label="URL de imagen"
              id="thumbnail"
              onChange={(e) => setThumbnail(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="stock"
              label="Stock inicial"
              id="stock"
              type='number'
              onChange={(e) => setStock(e.target.value)}
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
            <ProductsTable productosLista={productosLista} />
        </Container>
      </>

  );
}