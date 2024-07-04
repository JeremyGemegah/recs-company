import React from 'react';
import './App.css';
import { Box, Container, Stack, Typography } from '@mui/material';



function App() {
  return (
    <>
    <Box
    
    sx={{maxWidth: "100vw", height: "100vh", backgroundImage: "url(/image/img1.jpg)", margin: 0,padding : 0,backgroundSize: 'cover', overflow: 'hidden', position: 'relative', zIndex:'1'}}
    >
      <Box sx={{backgroundColor: '#0E1A39', width:'100%', height:'100%', opacity:'0.53', position: 'absolute', zIndex:'-1'}}></Box>
       <Container sx={{paddingTop: '16px'}}>
        <Box sx={{backgroundImage: "url(/image/logo.png)", width:'64px' , height: '60px', backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundPosition:'-10px'}}></Box>
      </Container>
      <Stack sx={{  height:'calc(100vh - 30%)', color: 'white', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
       <Typography variant='h1' sx={{fontFamily:'Times new roman' , fontVariantCaps: 'small-caps'}}>
          coming soon...
        </Typography>
        <Typography>
          we are currently working on our new site. 
        </Typography>
        <Typography>
          you can visit our social media profiles to learn more
        </Typography>
      </Stack>
    </Box>
    </>
  );
}

export default App;
