import {Box, Button, ButtonProps, IconButton, Toolbar} from "@mui/material";
import {styled} from "@mui/material/styles";

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

export const SignUpButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.common.white,
    textTransform: 'none',
    fontWeight:theme.typography.body1.fontWeight,
    fontSize:theme.typography.body1.fontSize,
    letterSpacing:theme.typography.body1.letterSpacing
}));
  
export const SignUpStyle = {
    position: 'absolute' as 'absolute',
    top: '55%',
    left: '50%',
    width:496, 
    minHeight: 588, 
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    outline: 0,
}

export const ToolbarStyle= styled(Toolbar)(() => ({
    display:'flex', 
    alignItems:'center', 
    justifyContent:'space-between',
  }));


export const LogoButton= styled(Button)(({theme}) => ({
    marginRight: theme.spacing(4)
  }));
  
  export const LiBox= styled(Box)(({theme}) => ({
    listStyleType: 'none',
    marginRight: theme.spacing(3)
  }));

  export const UlBox= styled(Box)(({theme}) => ({
    display:'flex',
    marginLeft:theme.spacing(30)
  }));

  export const SignUpStyleSm = {
    position: 'absolute' as 'absolute',
    top: '53%',
    left: '50%',
    minWidth: 296,
    minHeight: 470,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    outline: 0,
  };

  export const EmailMessageStyle = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    width:496, 
    height: 234, 
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
  };

  export const EmailMessageStyleSm = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    width:350, 
    height: 173, 
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
  };
