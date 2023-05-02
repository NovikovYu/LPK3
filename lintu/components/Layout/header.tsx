import { AppBar, Box, Button, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import LintuIcon from '../icon/icon';

const pages = ['Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#62AA5D',
      contrastText: 'white'
    },
  },
  typography: {
    fontFamily: 'Roboto'
  }
});

function Header() {
  return (
<ThemeProvider theme={theme}>
    <AppBar position="static" sx={{height:72}}>
      <Toolbar>
        <Link href="/">
            <LintuIcon sx={{display: {xs:'flex', md: 'flex'}, mr:45, ml:13.5, my:1.75}} />
        </Link>
        <Box sx={{component:"div", flexGrow:1, display: { xs: 'flex', md: 'flex' , justifyContent: 'flex-end'} }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{color:'white', fontWeight:400, fontSize:16, textTransform: 'none',letterSpacing:0.15,lineHeight:'150%', py:3, pr:4}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Link href="/">
        <Typography textAlign="right" sx={{flexGrow:1, pl:11, pr:15.5, py:3, letterSpacing:0.15,lineHeight:'150%'}}>Sigh in</Typography>
        </Link>
       </Toolbar>
    </AppBar>
</ThemeProvider>
  );
}
export default Header;
