import {AppBar, Backdrop, Box, Button, Link, Modal, ThemeProvider, Toolbar} from '@mui/material';
import * as React from 'react';
import LintuIcon from '../icon/icon';
import '@fontsource/roboto/400.css';
import { theme } from '@/pages/_app';
import SignUpForm from '@/feature/sign-up-form';
import { EmailMessageStyle, SinInButton, signUpStyle } from './styles';

const pages = ['Menu Item', 'Menu Item2', 'Menu Item3', 'Menu Item4', 'Menu Item5'];


function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
<ThemeProvider theme={theme}>
    <AppBar position="static" sx={{minHeight:72}}>
      <Toolbar>
        <Link href="/">
            <LintuIcon sx={{display: {xs:'flex', md: 'flex'}, mr:45, ml:13.5, my:1.75}} />
        </Link>
        <Box sx={{component:"div", flexGrow:1, display: { xs: 'flex', md: 'flex' , justifyContent: 'flex-end'}, pl:20, pr:9}}>
            {pages.map((page) => (
              <Link key={page} component="button"
                sx={{color:'white', fontWeight:400, fontSize:16,letterSpacing:0.15, py:3, pr:5, textDecoration:"none", fontFamily:theme.typography.fontFamily}}>
                {page}
              </Link>
            ))}
          </Box>
        <SinInButton onClick={handleOpen}>Sigh in</SinInButton>
        <Modal 
          open={open}
          onClose={handleClose}
          aria-labelledby="sing-up"
          aria-describedby="sign-up-form"
        >
          <Box sx={{...signUpStyle}}>
          <SignUpForm  />
          </Box>
        </Modal>

       </Toolbar>
    </AppBar>
</ThemeProvider>
  );
}
export default Header;
