//@ts-check
import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar  />
    <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:idItem" element={ <ItemDetailContainer /> } />
      </Routes>
      <Footer />
    </div>

    </BrowserRouter>
  );
}

export default App;
