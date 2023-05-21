import { Box, FormControl, FormHelperText, TextField,Typography } from "@mui/material";
import {styled } from "@mui/material/styles";

export const SignUpBox = styled(Box)(() => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between'
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

export const InputBox = styled(Box)(({theme}) => ({
  display:'flex', 
  justifyContent:'space-between', 
  gap:theme.spacing(2),
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
  
//SM breakpoint form
export const  BoxFormSm = styled(Box)(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  marginTop: 16,
  marginBottom:16,
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

// Email

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

export const MessageTypographySm = styled(Typography)(({theme}) => ({
  fontWeight:400, 
  fontSize:14, 
  lineHeight:'150%',
  letterSpacing: 0.15,
  alignSelf: 'stretch',
  fontStyle:'normal',
  marginBottom:theme.spacing(1)
}));