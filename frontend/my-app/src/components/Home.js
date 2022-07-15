import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'



export default function Home() {

  const navigate=useNavigate()

  const pageHandler=(e)=>{
    e.preventDefault()
    navigate('/')
  }
  return (<>
  <LogoutIcon style={{float:'right'}} onClick={pageHandler} />
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >


      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography style={{color:'blue'}} variant="h2" component="h1" gutterBottom>
         Welcome To Home Page
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Hey, Dipesh here.'}
          {'I am a Full Stack Developer.'}
        </Typography>
        <Typography variant="body1">This is my personal website.</Typography>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My website.
          </Typography>
        
        </Container>
      </Box>
    </Box></>
  
  );
}