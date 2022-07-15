
import * as React from 'react';
import {useState} from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom'

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function Login() {

  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const navigate = useNavigate();

  const handleSubmit =async  (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData=await axios.post('http://localhost:8000/login',{

      
       email: data.get('email'),
        password: data.get('password'),
       
  
      }).then((data)=>{
      setemail('')
      setpassword('')
      navigate("/home");

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `${data.data.message}`,
        showConfirmButton: false,
        timer: 1500
      })
     
      }).catch((error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.response.data.message}`,
        
        })
      })
  

  };

  return (

    <div style={{background:'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,19,131,1) 16%, rgba(0,212,255,1) 100%)',
    paddingTop:"5%",
    paddingBottom:"20%"}}>
 <ThemeProvider theme={theme}>
      <Container  style={{background:'white',borderRadius:"20px"}} component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
      <Link href='/'>
      <HomeIcon/>
      </Link>
   
    </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              autoComplete="current-password"
            />
       
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}


              style={{borderRadius:'50px',background:'rgb(2,0,36)',
              background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(126,19,131,1) 16%, rgba(0,212,255,1) 100%)'}}
            >
              Sign In
            </Button>
            <Grid container>
          
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Container>
    </ThemeProvider>

    </div>
   
  );
}
