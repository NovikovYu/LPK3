import {AppBar, Box, Button, Menu, MenuItem, Toolbar} from '@mui/material';
import * as React from 'react';
import LintuIcon from '../icon/icon';
import '@fontsource/roboto/400.css';
import {MenuButtonIcon, SignUpButton, ToolbarSm} from './Header-style';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ['Menu Item', 'Menu Item2', 'Menu Item3', 'Menu Item4', 'Menu Item5'];

interface Props {
    handleOpen: () => void;
}

function HeaderMd ({handleOpen}:Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <AppBar> 
            <ToolbarSm>
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
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
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
        </ToolbarSm>
        </AppBar>
    );
}
export default HeaderMd;