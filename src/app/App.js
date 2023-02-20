import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormNav from '../formComponents/FormNav/nav.component';
import Home from '../formComponents/FormHome/home.components';
import Login from '../formComponents/LoginForm/login.component';
import Register from '../formComponents/RegisterForm/register.components';
import ForgotPasswordForm from '../formComponents/ForgotPassword/ForgotPassword';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <ReactNotifications/>
      <FormNav/>
      <div className='formBody'>
        <div className='auth-inner'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path='/forgotPassword' element={<ForgotPasswordForm/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
