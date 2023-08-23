import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import axios, {isCancel, AxiosError} from 'axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Banking System
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {
  const [state, setState] = useState({
    acc_num: "",
    username: "",
    login_pw_1: "",
    login_pw_2: "",
    login_passwd: "",
    transaction_pw_1: "",
    transaction_pw_2: "",
    transaction_passwd: "",
    OTP: "",
    sendOTP: true,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };
  const handleSendOTP = (event) => {
    console.log("OTP sent!");
  }
  const handleResendOTP = (event) => {
    handleSendOTP(event);
  }
  const handleSubmit = (event) => {
    console.log("Yay")
    event.preventDefault();
    console.log(state.login_pw_1)
    console.log(state.login_pw_2)
    console.log(state.transaction_pw_1)
    console.log(state.transaction_pw_2)
    if(state.login_pw_1 === state.login_pw_2 && state.transaction_pw_1 === state.transaction_pw_2){
        console.log("Hmm")
        const data = {
        username: state.username,
        login_passwd: state.login_pw_1,
        acc_num: state.acc_num,
        transaction_passwd: state.transaction_pw_1
        } 
        console.log(data)
        axios({
            method: 'post',
            url: '/netbanking/register',
            data: data
        });
        console.log(state);
    }
    else{
        console.log("Bruh");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Register for Internet Banking
          </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div className="form-control">
          <label>Account Number</label>
          <input
            type="text"
            name="acc_num"
            value={state.acc_num}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Login Password</label>
          <input
            type="password"
            name="login_pw_1"
            value={state.login_pw_1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Confirm Login Password</label>
          <input
            type="password"
            name="login_pw_2"
            value={state.login_pw_2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Transaction Password</label>
          <input
            type="password"
            name="transaction_pw_1"
            value={state.transaction_pw_1}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Confirm Transaction Password</label>
          <input
            type="password"
            name="transaction_pw_2"
            value={state.transaction_pw_2}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={state.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
            {state.sendOTP && (
                <button onClick={handleSendOTP}>Send OTP</button>
            )}
            {!state.sendOTP && (
                <div>
                    <div className="form-control">
                    <input 
                        type="text" 
                        name="OTP"
                        value={state.OTP}
                        onChange={handleInputChange} />
                    </div>
                    <Button onClick={handleResendOTP}>Resend OTP</Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        >
                        Register
                    </Button>
                </div>
            )}
        </div>
            
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}