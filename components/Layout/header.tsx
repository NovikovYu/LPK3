import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box,Button,Container, Hidden, Menu, MenuItem} from '@mui/material';
import LintuIcon from '../icon/icon';
import {LiBox, LogoButton, MenuButton, MenuButtonIcon, SignUpButton, ToolbarStyle, UlBox} from './Header-style';

interface Props {
  handleOpen: () => void;
  isMatchLg: boolean;
}

const pages = ['confirm-your-email', 'Menu Item', 'Menu Item2', 'Menu Item3', 'Menu Item4'];

function Header({handleOpen, isMatchLg}:Props) {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  if (isMatchLg) {
    return (
      <AppBar>
        <Container maxWidth={'xl'}>
          <ToolbarStyle>
            <LogoButton href="/">
              <LintuIcon />
            </LogoButton>
            <Box component="nav">
              <UlBox component="ul">
                {pages.map((page) => (
                  <LiBox component="li" key={page} >
                    <MenuButton href={`/${page}`}>
                      {page}
                    </MenuButton>
                  </LiBox>
                ))}
              </UlBox>
            </Box>
            <SignUpButton onClick={handleOpen}>Sign In</SignUpButton> 
          </ToolbarStyle>
        </Container>
      </AppBar>
    );
  }
  return (
    <AppBar> 
    <Container maxWidth='sm'>
      <ToolbarStyle>
        <MenuButtonIcon 
          id="menu-button"
          aria-controls={open ? 'menu-button' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </MenuButtonIcon>
        <Menu
          id="item-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
          'aria-labelledby': 'item-button',
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} href="/">
                {page}
            </MenuItem>
          ))}
        </Menu>
        <Button href="/">
          <LintuIcon />
        </Button>
          <SignUpButton  sx={{textTransform:'none'}} onClick={handleOpen}>Sign In</SignUpButton> 
      </ToolbarStyle>
    </Container>
  </AppBar>
  );
}
  
export default Header;
