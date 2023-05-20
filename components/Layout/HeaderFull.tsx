import {AppBar, Box, Button, Toolbar} from '@mui/material';
import * as React from 'react';
import LintuIcon from '../icon/icon';
import '@fontsource/roboto/400.css';
import {MenuButton, SignUpButton} from './styles';
import styles from './Header.module.css'

const pages = ['Menu Item', 'Menu Item2', 'Menu Item3', 'Menu Item4', 'Menu Item5'];

interface Props {
  handleOpen: () => void;
}

function HeaderFull({handleOpen}:Props) {
  return (
    <AppBar position="static" sx={{minHeight:72}} className={styles.header} key="header">
      <Toolbar>
        <Box component="nav">
          <Box component="ul" 
          >
            <Box component="li">
          <Button href="/">
              <LintuIcon />
          </Button>
          </Box>
              {pages.map((page) => (
                <Box component="li">
                  <MenuButton key={page} href="/">
                    {page}
                  </MenuButton>
                </Box>
              ))}
            </Box>
          </Box>
        <SignUpButton onClick={handleOpen}>Sign up</SignUpButton> 
       </Toolbar>
    </AppBar>
  );
}
export default HeaderFull;