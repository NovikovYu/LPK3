import {Box, Button, ButtonProps, IconButton, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";

export const HeaderNav = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const  MenuButton = styled(Button)<ButtonProps>(({theme}) => ({
  color: theme.palette.common.white,
  textTransform: 'capitalize',
  fontWeight:theme.typography.body1.fontWeight,
  fontSize:theme.typography.body1.fontSize,
  letterSpacing:theme.typography.body1.letterSpacing
}));

export const MenuButtonIcon = styled(IconButton)(({theme}) => ({
  color: theme.palette.common.white
}));

export const SignInButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.common.white,
    textTransform: 'none',
    fontWeight:theme.typography.body1.fontWeight,
    fontSize:theme.typography.body1.fontSize,
    letterSpacing:theme.typography.body1.letterSpacing,
    [theme.breakpoints.down('lg')]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(2),
    },
}));

export const ToolbarStyle= styled(Toolbar)(() => ({
    display:'flex', 
    alignItems:'center', 
    justifyContent:'space-between',
  }));
  
  export const LiBox= styled(Box)(({theme}) => ({
    listStyleType: 'none',
    marginRight: theme.spacing(4)
  }));

  export const UlBox= styled(Box)(() => ({
    display:'flex',
  }));

export const SignInStyleBox=styled(Box)(({theme}) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width:496, 
  minHeight: 392, 
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '45%',
    left: '50%',
    width: 350, 
    minHeight: 250,
  }
}));

export const SignUpStyleBox=styled(Box)(({theme}) => ({
  position: 'absolute' as 'absolute',
  top: '55%',
  left: '50%',
  width:496, 
  minHeight: 588, 
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '53%',
    left: '50%',
    width: 300,
    minHeight: 270,
  }
}));

export const ForgotPasswordStyleBox=styled(Box)(({theme}) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width:496, 
  minHeight: 242,
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '50%',
    left: '50%',
    width: 350, 
    minHeight: 155,
  }
}));

export const ForgotPasswordMessageStyleBox=styled(Box)(({theme}) => ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  width:496, 
  height: 210, 
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '50%',
    left: '50%',
    width: 350, 
    height: 178,
  }
}));

export const SignUpMessageStyleBox=styled(Box)(({theme}) => ({
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  width:496, 
  height: 234, 
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.background.paper,
  outline: 0,
  [theme.breakpoints.down('sm')]: {
    top: '40%',
    left: '50%',
    width:360, 
    height: 178, 
  }
}));
