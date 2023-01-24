
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Footer from './components/main/Footer';
import Admin from './components/admin';
import User from './components/user';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import Home from './components/main/Home';

function App() {
  return (
    

    <div>
    
      <BrowserRouter>
        <Routes>

          <Route element={<Navigate to="/main/home" />} path="/"/>
          <Route element={<Main />} path="main">
          <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="footer" element={<Footer />} />
          </Route>
          
          <Route element={<Admin />} path="admin">
            <Route path="pofile" element={<AdminProfile />} />
          
          </Route>
          
          <Route element={<User />} path="user">
            <Route path="pofile" element={<UserProfile />} />
          
          </Route>

          

        </Routes>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
