import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from './formComponents/nav.component';
import Home from './formComponents/home.components';
import Login from './formComponents/login.component';
import Register from './formComponents/register.components';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
