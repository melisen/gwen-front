import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


export default function Footer() {
  return (
    <Container maxWidth="xl" style={{position:'relative', left:'0', bottom:'0', right:'0', display:'flex', marginTop:'auto', flexDirection:'column', justifyContent:'center', alignItems:'center'}} sx={{backgroundColor:'secondary.dark'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>

            </div>
            <Typography variant="body1" component="div"  sx={{color:'secondary.main', textAlign:'center', flexGrow: 1 }}> &copy; Copyright 2023 melisen </Typography>
    </Container>
  )
}
