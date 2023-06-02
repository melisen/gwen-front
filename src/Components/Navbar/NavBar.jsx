//@ts-check
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import "./NavBar.css"
//import dragon from "../../Images/dragon-logo.png";
import CartWidget from "./CartWidget.jsx";
import {Link} from 'react-router-dom';

const pages = ['Libros', 'Chops', 'Indumentaria'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='navBarContainer'>
        <Toolbar disableGutters>

        <Link to={"/"}  style={{  textDecoration: 'none' }} >
        <div className="divBrand">
              
              <Typography variant="h3" component="div" className="typographyBrand" sx={{ flexGrow: 1, color:'secondary' }}>
              Gwendolyn
              </Typography>
        </div>
        </Link>
        
        <Typography variant="h6" component="div" className="typographyBrand fantasyStore" sx={{ flexGrow: 1 }}>
              Fantasy Store
            </Typography>

          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  
                    <Typography textAlign="center">
                    {page}
                    </Typography>
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
      
              <Button 
                
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'primary.light', display: 'block', fontSize: '1.3rem' }}
              >
                <Link to= {`/category/${page}`} style={{ color: 'inherit', textDecoration: 'none' }}  >
                  {page}
                </Link>
               
              </Button>
       
            ))}
          </Box>
          <CartWidget/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;


