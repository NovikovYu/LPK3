import { Box, FormControl, FormHelperText, TextField,Typography } from "@mui/material";
import {styled } from "@mui/material/styles";

export const SignInBox = styled(Box)(() => ({
    display:'flex', 
    alignItems:'center', 
    justifyContent:'space-between'
  }));
  
  export const  BoxForm = styled(Box)(({theme}) => ({
      display:'flex',
      flexDirection:'column',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      marginRight: theme.spacing(6),
      marginLeft:theme.spacing(6),
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
