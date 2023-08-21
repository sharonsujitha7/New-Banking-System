//import logo from './logo.svg';
import SignIn from './Login';
import React from 'react';
import Register from './Register';
//import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import DisplaySuccess from './TransferSuccesful';
import Transaction from './Transaction';

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route
          path="/login"
          element={<SignIn />}
        />
        <Route
          path="/Register"
          element={<Register />}
        />
        <Route
          path="/Success"
          element={<DisplaySuccess />}
        />
        <Route
          path="/Transaction"
          element={<Transaction />}
        />
      </Routes>
    </Router>
  );
}

export default App;
