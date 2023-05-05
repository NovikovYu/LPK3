import { AppBar, Box, Button, Link, ThemeProvider, Toolbar, Typography, createTheme } from '@mui/material';
import * as React from 'react';
import LintuIcon from '../icon/icon';
import '@fontsource/roboto/400.css';

const pages = ['Menu Item', 'Menu Item', 'Menu Item', 'Menu Item', 'Menu Item'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#62AA5D',
      contrastText: 'white'
    },
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
              <Link key={page} component="button"
                sx={{color:'white', fontWeight:400, fontSize:16,letterSpacing:0.15, py:3, pr:4, textDecoration:"none"}}>
                {page}
              </Link>
            ))}
          </Box>
          <Link href="/sign-up">
        <Typography textAlign="right" sx={{color:'white', flexGrow:1, pl:11, pr:15.5, py:3, letterSpacing:0.15}}>Sigh in</Typography>
        </Link>
       </Toolbar>
    </AppBar>
</ThemeProvider>
  );
}
export default Header;
