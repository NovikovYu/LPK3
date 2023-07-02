import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box,Button,Container, Menu, MenuItem} from '@mui/material';
import LintuIcon from '../icon/icon';
import {HeaderNav, LiBox, MenuButton, MenuButtonIcon, SignInButton, ToolbarStyle, UlBox} from './Header-style';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  handleOpenSignInModal: () => void;
}

const pages = ['Menu Item', 'Menu Item2', 'Menu Item3', 'Menu Item4', 'Menu Item5'];

function Header({handleOpenSignInModal}:Props) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isDesktop) {
    return (
      <AppBar>
        <Container maxWidth='xl'>
          <ToolbarStyle>
            <div>
              <Button href="/">
                <LintuIcon />
              </Button>
            </div>
            <HeaderNav>
              <Box component="nav">
                <UlBox component="ul">
                  {pages.map((page) => (
                    <LiBox component="li" key={page}>
                      <MenuButton href="/">
                        {page}
                      </MenuButton>
                    </LiBox>
                  ))}
                </UlBox>
              </Box>
              </HeaderNav>
              <div>
                <SignInButton onClick={handleOpenSignInModal}>Sign In</SignInButton>
              </div> 
          </ToolbarStyle>
        </Container>
      </AppBar>
    );
  }
  return (
    <AppBar> 
      <Container maxWidth='md'>
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
            <SignInButton  sx={{textTransform:'none'}} onClick={handleOpenSignInModal}>Sign In</SignInButton> 
        </ToolbarStyle>
      </Container>
  </AppBar>
  );
}
  
export default Header;
