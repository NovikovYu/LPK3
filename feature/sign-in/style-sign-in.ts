import { Box, Button, FormControl, IconButton, InputLabel, TextField, Typography } from "@mui/material";
import {styled } from "@mui/material/styles";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';

export const SignInBox = styled(Box)(() => ({
    display:'flex', 
    alignItems:'center', 
    justifyContent:'space-between'
  }));
  
export const  SignInBoxForm = styled(Box)(({theme}) => ({
      display:'flex',
      flexDirection:'column',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginRight: theme.spacing(6),
      marginLeft:theme.spacing(6),
      gap:theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2),
        marginBottom:theme.spacing(2),
        marginRight: theme.spacing(3.5),
        marginLeft:theme.spacing(3.5),
        gap:theme.spacing(1.5),
      },
}));
  
export const InputPasswordSignIn = styled(FormControl)(({theme}) => ({
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1),
    input: {
      fontSize:theme.typography.h6.fontSize
    },
    label: {
      fontSize:theme.typography.h6.fontSize
    }
  },
}));

export const SignInButtonStyle = styled(LoadingButton)(({theme}) => ({
  color: theme.palette.primary.contrastText,
  "&.Mui-disabled":{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.h6.fontSize,
  },
}));

export const SignUpButtonStyle= styled(Button)(({theme}) => ({
  color: theme.palette.text.primary,
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.h6.fontSize,
  },
}));

export const SendIconButtonStyle= styled(SendIcon)(() => ({
  display:'none',
  "&.MuiLoadingButton-endIcon":{
      display: 'none'
    },
}));

export const InputLabelForgotPassword = styled(InputLabel)(({theme}) => ({
  fontSize: theme.typography.h6.fontSize,
  textAlign: 'end',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.subtitle1.fontSize,
  },
}));

export const  ForgotPasswordBox = styled(Box)(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  marginTop: theme.spacing(4),
  marginBottom:theme.spacing(4),
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    marginBottom:theme.spacing(2.5),
    marginRight: theme.spacing(4),
    marginLeft:theme.spacing(4),
  },

}));

export const ForgotPasswordFormBox = styled(Box)(({theme}) => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between',
  marginBottom:theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap:theme.spacing(0),
    marginBottom:theme.spacing(0),
  },
}));

export const ForgotPasswordFormHeaderName = styled(Typography)(({theme}) => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between',
  fontSize: theme.typography.h3.fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body1.fontSize,
    gap:theme.spacing(0),
    marginBottom:theme.spacing(0),
  },
}));

export const ForgotPasswordFormIconButton = styled(IconButton)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: 'small',
    "& .MuiSvgIcon-root":{
      fontSize:'medium',
    },
  },
}));

export const  InputFieldForgotPassword = styled(TextField)(({theme}) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.7),
    input: {
      fontSize:theme.typography.h6.fontSize,
    },
    label: {
      fontSize:theme.typography.h6.fontSize
    },
    ".MuiFormHelperText-root.Mui-error": {
      fontSize:theme.typography.subtitle1.fontSize
    },
  },
}));

