import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./fonts/fonts.css"
import "./fonts/KellyAnnGothic.ttf"


const themeGwen = createTheme({
  palette:{
    mode: 'light',
    primary:{
      main: '#113f60',
      light:'#50b5cb'
    },
    secondary:{
      light:'#ebe3d1',
      main: '#caad42',
      dark:'#260606'
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
    fontFamily: 'Arima',
    h1:{
      fontFamily: 'goth',
      fontSize:"2.5rem",
     
    },
    h3:{
      fontFamily: 'Modern Antiqua', 
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
      fontFamily: 'Arima'
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
