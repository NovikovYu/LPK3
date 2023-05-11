import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

export const SinInButton = styled(Button)<ButtonProps>(() => ({
    color: 'white',
    paddingLeft:50,
    paddingRight:80,
    paddingTop: 3,
    paddingBottom:3, 
    letterSpacing:0.15,
    fontWeight:400,
    textTransform:'none',
    fontSize:16
  }));
  
 export const signUpStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    width:496, 
    minHeight: 588, 
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    outline: 0,
  };

  export const EmailMessageStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    width:496, 
    minHeight: 234, 
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
  };