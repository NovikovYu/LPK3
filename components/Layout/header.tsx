import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Box,Button,Container, Menu, MenuItem} from '@mui/material';
import LintuIcon from '../img/icon';
import {AppBarRestyled, HeaderWrapper, MenuButtonRestyled, MenuIconButtonRestyled, NavigationListItem, NavigationUlItem, SignInButtonRestyled, ToolbarRestyled} from './Header-style';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface Props {
  handleOpenSignInModal: () => void;
}

const pages = ['Portfolio', 'Settings', 'Confirm-your-email'];

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
      <AppBarRestyled>
        <Container maxWidth='xl'>
          <ToolbarRestyled>
            <div>
              <Button href="/">
                <LintuIcon />
              </Button>
            </div>
            <HeaderWrapper>
              <Box component="nav">
                <NavigationUlItem component="ul">
                  {pages.map((page) => (
                    <NavigationListItem component="li" key={page}>
                      <MenuButtonRestyled href={`/${page.toLowerCase()}`}>
                        {page}
                      </MenuButtonRestyled>
                    </NavigationListItem>
                  ))}
                </NavigationUlItem>
              </Box>
                <SignInButtonRestyled onClick={handleOpenSignInModal}>Sign In</SignInButtonRestyled>
            </HeaderWrapper>
          </ToolbarRestyled>
        </Container>
      </AppBarRestyled>
    );
  }
  return (
    <AppBarRestyled> 
      <Container maxWidth='md'>
        <ToolbarRestyled>
          <Button href="/">
            <LintuIcon />
          </Button>
          <div>
            <SignInButtonRestyled onClick={handleOpenSignInModal}>Sign In</SignInButtonRestyled> 
            <MenuIconButtonRestyled 
              id="menu-button"
              aria-controls={open ? 'menu-button' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </MenuIconButtonRestyled>
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
          </div>
        </ToolbarRestyled>
      </Container>
  </AppBarRestyled>
  );
}
  
export default Header;
