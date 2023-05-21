import {Button, ButtonProps, IconButton, Toolbar} from "@mui/material";
import {styled } from "@mui/material/styles";

export const  MenuButton = styled(Button)<ButtonProps>(({theme}) => ({
  color: theme.palette.common.white,
  textTransform: 'capitalize',
  fontWeight:400, 
  fontSize:16,
  letterSpacing:0.15, 
  
}));

export const MenuButtonIcon = styled(IconButton)(({theme}) => ({
  color: theme.palette.common.white
}));

export const SignUpButton = styled(Button)<ButtonProps>(({theme}) => ({
    color: theme.palette.common.white,
    textTransform: 'none',
    letterSpacing:0.15,
    fontWeight:400,
    fontSize:16,
    marginRight:theme.spacing(4)
  }));
  
 export const SignUpStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    width:496, 
    minHeight: 588, 
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    outline: 0,
  };

export const ToolbarSm= styled(Toolbar)(() => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between'
}));

export const SignUpStyleSm = {
  position: 'absolute' as 'absolute',
  top: '53%',
  left: '50%',
  minWidth: 296,
  minHeight: 498,
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
  height: 165, 
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
};