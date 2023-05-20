import { Box, Button, ButtonProps, FormControl, FormHelperText, IconButton, TextField, Toolbar, Typography } from "@mui/material";
import {styled } from "@mui/material/styles";

export const  MenuButton = styled(Button)<ButtonProps>(({theme}) => ({
  color: theme.palette.common.white,
  textTransform: 'capitalize',
  fontWeight:400, 
  fontSize:16,
  letterSpacing:0.15, 
  
}));

export const  BoxForm = styled(Box)(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  marginTop: 32,
  marginBottom:32,
  marginRight: 48,
  marginLeft:48,
  gap:theme.spacing(4),
}));

export const SignUpBox = styled(Box)(() => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between'
}));


export const InputBox = styled(Box)(({theme}) => ({
  display:'flex', 
  justifyContent:'space-between', 
  gap:theme.spacing(2),
}));


export const MenuButtonIcon = styled(IconButton)(({theme}) => ({
  color: theme.palette.common.white
}));

export const  InputField = styled(TextField)(({theme}) => ({
  marginBottom: theme.spacing(2),
}));

export const InputFormControl = styled(FormControl)(({theme}) => ({
  marginBottom: theme.spacing(2),
}));

export const InputPassword = styled(FormControl)(({theme}) => ({
  marginBottom: theme.spacing(1),
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
    top: '40%',
    left: '50%',
    width:496, 
    minHeight: 588, 
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    outline: 0,
  };

//SM breakpoint form
export const  BoxFormSm = styled(Box)(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  marginTop: 14,
  marginBottom:14,
  marginRight: 24,
  marginLeft:24,
  gap:theme.spacing(2),
}));

export const InputFormControlSm = styled(FormControl)(({theme}) => ({
  marginBottom: theme.spacing(1),
  fontSize:'small'
}));

export const  InputFieldSm = styled(TextField)(({theme}) => ({
  marginBottom: theme.spacing(1),
  fontSize:'small'
}));

export const InputPasswordSm = styled(FormControl)(({theme}) => ({
  fontSize:'small'
}));

export const HelperTextSm = styled(FormHelperText)(() => ({
  fontSize:10
}));

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
  minHeight: 525,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  outline: 0,
};

// Email
export const EmailMessageStyle = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  width:496, 
  height: 234, 
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
};

export const EmailTypography = styled(Typography)(() => ({
  fontWeight:400, 
  fontSize:24, 
  lineHeight:'133.4%'
}));

export const  EmailBox = styled(Box)(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  marginTop: 32,
  marginBottom:32,
  marginRight: 48,
  marginLeft:48,
}));

export const MessageBox = styled(Box)(({theme}) => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between',
  marginBottom:theme.spacing(2)
}));

export const MessageTypography = styled(Typography)(({theme}) => ({
  fontWeight:400, 
  fontSize:16, 
  lineHeight:'150%',
  letterSpacing: 0.15,
  alignSelf: 'stretch',
  fontStyle:'normal',
  marginBottom:theme.spacing(4)
}));

// SM breakpoints email
export const EmailMessageStyleSm = {
  position: 'absolute' as 'absolute',
  top: '40%',
  left: '50%',
  width:350, 
  height: 150, 
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
};

export const EmailTypographySm= styled(Typography)(() => ({
  fontWeight:400, 
  fontSize:18, 
  lineHeight:'133.4%'
}));

export const  EmailBoxSm = styled(Box)(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  marginTop: 16,
  marginBottom:16,
  marginRight: 32,
  marginLeft:32,
  gap:theme.spacing(1),
}));

export const MessageBoxSm = styled(Box)(() => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between'
}));

export const MessageTypographySm = styled(Typography)(() => ({
  fontWeight:400, 
  fontSize:14, 
  lineHeight:'150%',
  letterSpacing: 0.15,
  alignSelf: 'stretch',
  fontStyle:'normal'
}));