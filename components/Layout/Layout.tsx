import { FC, PropsWithChildren } from "react";
import Header from "./header";
import * as React from 'react';
import {Box, Modal} from "@mui/material";
import {EmailMessageStyle, EmailMessageStyleSm, SignUpStyle, SignUpStyleSm } from "./Header-style";
import SignUpForm from "@/feature/sign-up/sign-up-form";
import SendEmailMessage from "@/feature/sign-up/email-message";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMatchSm = useMediaQuery(theme.breakpoints.down('sm'));
  const [openFormModal, setOpenFormModal] = React.useState(false);

    const handleOpen = () => {
        setOpenFormModal(true);
    };
    const handleClose = () => {
        setOpenFormModal(false);
    };
  
    const [openEmailModal, setOpenEmailModal] = React.useState(false);
    const handleOpenEmail = () => {
      setOpenEmailModal(true);
    };
    const handleCloseEmail = () => {
      setOpenEmailModal(false);
    };

    // закладка - убрать <Box mt='100px' border="1px dotted gray">
    return (
        <div>
            <Header 
              handleOpen={handleOpen} 
              isMatchLg={isMatchLg}
            />
            <Modal
                open={openFormModal}
                onClose={handleClose}
                aria-labelledby="sign-up"
                aria-describedby="sign-up-form"
            >
                  <Box sx={isMatchSm ? {...SignUpStyleSm} : {...SignUpStyle}}> 
                    <SignUpForm
                      handleClose={handleClose} 
                      handleOpenEmail={handleOpenEmail}
                      isMatchSm={isMatchSm}
                    />
                  </Box>                  
              </Modal>
              <Modal
                  open={openEmailModal}
                  onClose={handleCloseEmail}
                  aria-labelledby="email-message"
                  aria-describedby="send-email-message"
                >
                  <Box sx={isMatchSm ? {...EmailMessageStyleSm} : {...EmailMessageStyle}}> 
                    <SendEmailMessage handleCloseEmail={handleCloseEmail} isMatchSm={isMatchSm} />
                  </Box>
                </Modal>
              <Box>
              {children}
              </Box>
             
        </div>
    )
};
export default Layout;