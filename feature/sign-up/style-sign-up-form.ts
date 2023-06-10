import { Box, Button, FormControl, FormControlLabel, FormHelperText, TextField,Typography } from "@mui/material";
import {styled } from "@mui/material/styles";
import PhoneInput from 'react-phone-input-2';
import CloseIcon from '@mui/icons-material/Close';

export const SignUpBox = styled(Box)(() => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between'
}));

export const  BoxForm = styled(Box)(({theme}) => ({
    display:'flex',
    flexDirection:'column',
    marginTop: theme.spacing(4),
    marginBottom:theme.spacing(4),
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

export const InputBox = styled(Box)(({theme}) => ({
  display:'flex', 
  justifyContent:'space-between', 
  gap:theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    flexDirection:'column',
    gap:theme.spacing(0),
  },
}));

export const  FormHeaderName = styled(Typography)(({theme}) => ({
  fontSize:theme.typography.h3.fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.h4.fontSize,
  },
}));

export const CloseIconButton = styled(CloseIcon)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: 'large',
  },
}));

export const  InputField = styled(TextField)(({theme}) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
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

export const InputFormControl = styled(FormControl)(({theme}) => ({
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(1.5),
  },
}));

export const InputPassword = styled(FormControl)(({theme}) => ({
  marginBottom: theme.spacing(2),
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

export const StyledPhoneInput = styled(PhoneInput)(({theme}) => ({
 "&.react-tel-input .form-control:focus": {
    borderColor: theme.palette.primary.main,
    boxShadow: "0px 0px 0px 1px #62AA5D",
  },
  "&.react-tel-input .form-control.invalid-number:focus": {
    borderColor: theme.palette.primary.main,
    boxShadow: "0px 0px 0px 1px #62AA5D",
  },
  [theme.breakpoints.down('sm')]: {
    "&.react-tel-input .form-control": {
      fontSize:theme.typography.h6.fontSize,
      height:30
    },
     "&.react-tel-input .special-label": {
      fontSize:theme.typography.subtitle1.fontSize
    },
  },
}));

export const HelperText = styled(FormHelperText)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.subtitle1.fontSize
  },
}));

export const HelperTextCheckbox = styled(FormHelperText)(({theme}) => ({
  marginBottom:theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.subtitle1.fontSize
  },
}));

export const HelperTextPassword = styled(FormHelperText)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.subtitle2.fontSize,
  },
}));

export const LabelText = styled(FormControlLabel)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    '& .MuiFormControlLabel-label': { 
      fontSize:theme.typography.h6.fontSize
    }
  },
}));

export const ButtonStyle= styled(Button)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.h6.fontSize,
  },
}));

// email
export const EmailTypography = styled(Typography)(({theme}) => ({
  fontWeight:theme.typography.h3.fontWeight, 
  fontSize:theme.typography.h3.fontSize, 
  [theme.breakpoints.down('sm')]: {
    fontWeight:theme.typography.h4.fontWeight,  
    fontSize:theme.typography.h4.fontSize, 
  },
}));

export const  EmailBox = styled(Box)(({theme}) => ({
  display:'flex',
  flexDirection:'column',
  marginTop: theme.spacing(4),
  marginBottom:theme.spacing(4),
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(2),
    marginBottom:theme.spacing(2),
    marginRight: theme.spacing(4),
    marginLeft:theme.spacing(4),
  },

}));

export const MessageBox = styled(Box)(({theme}) => ({
  display:'flex', 
  alignItems:'center', 
  justifyContent:'space-between',
  marginBottom:theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    gap:theme.spacing(0),
  },
}));

export const MessageTypography = styled(Typography)(({theme}) => ({
  fontWeight:theme.typography.body1.fontWeight, 
  fontSize:theme.typography.body1.fontSize,
  letterSpacing:theme.typography.body1.letterSpacing,
  alignSelf: 'stretch',
  fontStyle:'normal',
  marginBottom:theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    fontWeight:theme.typography.h5.fontWeight, 
    fontSize:theme.typography.h5.fontSize, 
    letterSpacing: theme.typography.h5.letterSpacing,
    alignSelf: 'stretch',
    marginBottom:theme.spacing(1)
  },
}));

export const ButtonMessage= styled(Button)(({theme}) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize:theme.typography.h6.fontSize,
    marginTop: theme.spacing(1),
  },
}));



