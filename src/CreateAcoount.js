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
import axios, { isCancel, AxiosError } from 'axios';
import "./CreateAccount.css"

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

export default function CreateAccount() {
  const [checkstate, setIsChecked] = useState({
    "is_credit_card":false,
    "is_debit_card":false,
    "is_net_banking":false
  });
  const [state, setState] = useState({
    "adhar_id": null,
    "age": null,
    "annual_income": null,
    "dob": "",
    "email": "",
    "father_name": "",
    "first_name": "",
    "gender": "",
    "income_source": "",
    "is_admin": null,
    "last_name": "",
    "middle_name": "",
    "mobile_num": null,
    "occupation_type": "",
    "perm_add_id": "",
    "temp_add_id": "",
    "perm_add_line_1":"",
    "perm_add_line_2": "",
    "perm_add_line_3": "",
    "temp_add_line_1": "",
    "temp_add_line_2": "",
    "temp_add_line_3": "",
    "title": "",
    "balance": null,
    "account_type":"",

  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleCheckboxChange = (event) => {
    const name = event.target.name;
    setIsChecked((prevProps) => ({
      ...prevProps,
      [name]: !prevProps[name]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      'email': state.email,
      'mobile_num':parseInt(state.mobile_num),
      'adhar_id': parseInt(state.adhar_id),
      'title': state.title,
      'first_name': state.first_name,
      'middle_name': state.middle_name,
      'last_name': state.last_name,
      'father_name': state.father_name,
      'dob': state.dob,
      'age': parseInt(state.age),
      'gender': state.gender,
      'perm_add_id': state.perm_add_line_1 + ' ' + state.perm_add_line_2 + ' ' + state.perm_add_line_3,
      'temp_add_id': state.temp_add_line_1 + ' ' + state.temp_add_line_2 + ' ' + state.temp_add_line_3,
      'is_admin':parseInt(state.is_admin),
      'occupation_type': state.occupation_type,
      'income_source': state.income_source,
      'annual_income': parseInt(state.annual_income),
      'account':{
        'account_type':state.account_type,
        
        'balance': state.balance.toString(),
        'open_date':'',
        'timestamp':parseInt('0'),
        'is_credit_card':(checkstate.is_credit_card ? 1 : 0),
        'is_debit_card' : (checkstate.is_debit_card ? 1 : 0),
        'is_net_banking': (checkstate.is_net_banking ? 1 : 0)
      }
    }
    console.log(data)
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8082/user',
      data: data
    });
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
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <div className="form-control">
              <label>Email: </label>
              <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Mobile parseInt: </label>
              <input
                type="int"
                name="mobile_num"
                value={state.mobile_num}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Aadhaar parseInt: </label>
              <input
                type="int"
                name="adhar_id"
                value={state.adhar_id}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Title: </label>
              <input
                type="text"
                name="title"
                value={state.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>First Name: </label>
              <input
                type="text"
                name="first_name"
                value={state.first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Middle Name: </label>
              <input
                type="text"
                name="middle_name"
                value={state.middle_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Last Name: </label>
              <input
                type="text"
                name="last_name"
                value={state.last_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Father's Name: </label>
              <input
                type="text"
                name="father_name"
                value={state.father_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Date of Birth: </label>
              <input
                type="text"
                name="dob"
                value={state.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Age: </label>
              <input
                type="int"
                name="age"
                value={state.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Gender: </label>
              <input
                type="text"
                name="gender"
                value={state.gender}
                onChange={handleInputChange}
              />
            </div>
            <h2>Permanent Address</h2>
            <div className="form-control">
              <label>Permanent Address Line 1: </label>
              <input
                type="text"
                name="perm_add_line_1"
                value={state.perm_add_line_1}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Permanent Address Line 2: </label>
              <input
                type="text"
                name="perm_add_line_2"
                value={state.perm_add_line_2}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Permanent Address Line 3: </label>
              <input
                type="text"
                name="perm_add_line_3"
                value={state.perm_add_line_3}
                onChange={handleInputChange}
              />
            </div>
            <h2>Temporary Address</h2>
            <div className="form-control">
              <label>Temporary Address Line 1: </label>
              <input
                type="text"
                name="temp_add_line_1"
                value={state.temp_add_line_1}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Temporary Address Line 2: </label>
              <input
                type="text"
                name="temp_add_line_2"
                value={state.temp_add_line_2}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Temporary Address Line 3: </label>
              <input
                type="text"
                name="temp_add_line_3"
                value={state.temp_add_line_3}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Admin: </label>
              <input
                type="int"
                name="is_admin"
                value={state.is_admin}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Occupation Type: </label>
              <input
                type="text"
                name="occupation_type"
                value={state.occupation_type}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Source of Income: </label>
              <input
                type="text"
                name="income_source"
                value={state.income_source}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Annual Income: </label>
              <input
                type="int"
                name="annual_income"
                value={state.annual_income}
                onChange={handleInputChange}
              />
            </div>
            <h1> Account details : </h1>
            <div className="form-control">
              <label>Account Type: </label>
              <input
                type="text"
                name="account_type"
                value={state.account_type}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Balance: </label>
              <input
                type="int"
                name="balance"
                value={state.balance}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-control">
              <label>Username: </label>
              <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleInputChange}
              />
            </div>
            <FormControlLabel
              control={<Checkbox name="is_credit_card" color="primary"  onChange={handleCheckboxChange}/>}
              label="Credit Card?"
            />
            <FormControlLabel
              control={<Checkbox name="is_debit_card" color="primary"  onChange={handleCheckboxChange}/>}
              label="Debit Card?"
            />
            <FormControlLabel
              control={<Checkbox name="is_net_banking" color="primary"  onChange={handleCheckboxChange}/>}
              label="Net Banking?"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">

                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">

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