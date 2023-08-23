import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Login from './Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateAccount from './CreateAcoount';
import SignIn from './Login';
import Register from './Register';
import ForgotUserID from './ForgotUsername';
import ForgotPassword from './ForgotPassword';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/createAccount" element={<CreateAccount/>}/>
            <Route path="/login" element={<SignIn/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/forgotUserId" element={<ForgotUserID/>}/>
            <Route path="/forgotPassword" element={<ForgotPassword/>}/> 
            <Route path="/dashboard" element ={<Dashboard/>} />
            
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer /> */}
    </div>
  );
}

export default App;