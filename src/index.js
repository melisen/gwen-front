import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const themeGwen = createTheme({
  palette:{
    mode: 'light',
    primary:{
      main: '#113f60',
      light:'#50b5cb'
    },
    secondary:{
      main: '#caad42',
      dark:'#4a2222'
    },
    action:{
      active:'#cda280',
      hover:'#4a2222'
    },
    info:{
      main:'#b4d5cb'
    }
  },
  typography:{
    fontFamily: 'Metamorphous',
    h3:{
      fontSize:"2rem",
      lineHeight:1.8
    },
    h5:{
      fontSize:"1rem",
    },
    button:{
      fontFamily: 'Modern Antiqua'
    },
    body1:{
      fontFamily: 'Joan'
    }
  }

})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={themeGwen}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
