import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

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

export default function SignIn() {
  const [state, setState] = useState({
    username: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: state.username,
      password: state.password
    }
    console.log(state);
    try {
      const response = axios.post('http://localhost:8082/netbanking/login', data);
      
      if (response.data.success) {
        sessionStorage.setItem('userID', state.userid);
        console.log('Login successful!');
        
      } else {
        console.log('Login failed. Incorrect email or password.');
      }
    }catch (error) {
        console.error('An error occurred while logging in:', error);
    }
    
    sessionStorage.setItem("userID", state.username);

    const sessionTimeoutMinutes = 15;
  const sessionTimeoutMilliseconds = sessionTimeoutMinutes * 60 * 1000; // Convert minutes to milliseconds
  const clearSessionTimer = setTimeout(() => {
    sessionStorage.clear();
  }, sessionTimeoutMilliseconds);   

    navigate("/dashboard");

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
           
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <div className='full-form'>
          <div className="form-field">
            <div className='left-col'>
          <label>User ID:</label>
          </div>
          <input
            type="text"
            name="username"
            className='right-col'
            value={state.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <div className='left-col'>
          <label>Password</label>
          </div>
          <input
            className='right-col'
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        </div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"First Time User? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}