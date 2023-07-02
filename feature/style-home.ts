import { Box, Button, FormControl } from "@mui/material";
import {styled } from "@mui/material/styles";

export const  ChangePasswordBox = styled(Box)(({theme}) => ({
  marginTop: theme.spacing(15),
  width: 450,
  minHeight: 202,
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(11),
    width: 300,
    minHeight: 102,
  },

}));

export const ChangePasswordFormBox = styled(Box)(({theme}) => ({
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

  export const ChangePasswordHeading = styled(Box)(({theme}) => ({
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing(4),
    fontSize:theme.typography.h3.fontSize,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2.5),
      fontSize:theme.typography.h4.fontSize,
    },
  }));

  export const InputChangePassword = styled(FormControl)(({theme}) => ({
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(1.5),
      input: {
        fontSize:theme.typography.h6.fontSize
      },
      label: {
        fontSize:theme.typography.h6.fontSize
      }
    },
  }));

  export const  ChangePasswordMessageBox = styled(Box)(({theme}) => ({
    marginTop: theme.spacing(15),
    marginLeft: theme.spacing(10),
    width: 350,
    minHeight: 202,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(11),
      width: 260,
      minHeight: 102,
    },
  
  }));

  export const ChangePasswordMessageHeading = styled(Box)(({theme}) => ({
    fontFamily: theme.typography.fontFamily,
    marginBottom: theme.spacing(4),
    fontSize:theme.typography.h3.fontSize,
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(2.5),
      fontSize:theme.typography.h4.fontSize,
    },
  }));

  export const ChangePasswordButtonStyle= styled(Button)(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
      fontSize:theme.typography.h6.fontSize,
      marginTop: theme.spacing(1),
    },
  }));