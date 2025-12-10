import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tabela from './components/Tabela';
import "./pages/Home"
import "./pages/Pag2"

import './App.css';
import Pag2 from './pages/Pag2';
import Home from './pages/Home';

function App() {

  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Pag2' element={<Pag2/>}/>
    </Routes>
    </BrowserRouter>
  )
 
}

export default App;