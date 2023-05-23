import { FC, PropsWithChildren } from "react";
import Header from "./header";
import * as React from 'react';
import {Box, Modal} from "@mui/material";
import {EmailMessageStyle, EmailMessageStyleSm, SignUpStyle, SignUpStyleSm } from "./Header-style";
import SignUpForm from "@/feature/sign-up/sign-up-form";
import SendEmailMessage from "@/feature/sign-up/email-message";
//import SignUpFormSm from "@/feature/sign-up/sm-sign-up-form";
//import SendEmailMessageSm from "@/feature/sign-up/sm-email-message";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
  const theme = useTheme();
  const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isMatchMd = useMediaQuery(theme.breakpoints.between('sm','lg'));
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

    return (
        <div>
            <Header 
              handleOpen={handleOpen} 
              isMatchSm={isMatchSm}
              isMatchLg={isMatchLg}
            />
            {isMatchSm && 
              <>
                <Modal
                  open={openFormModal}
                  onClose={handleClose}
                  aria-labelledby="sign-up"
                  aria-describedby="sign-up-form"
                >
                  <Box sx={{...SignUpStyleSm}}> 
                    <SignUpForm
                      handleClose={handleClose} 
                      handleOpenEmail={handleOpenEmail}
                    />
                  </Box>
                </Modal>
                <Modal
                  open={openEmailModal}
                  onClose={handleCloseEmail}
                  aria-labelledby="email-message"
                  aria-describedby="send-email-message"
                >
                  <Box sx={{...EmailMessageStyleSm}}> 
                    <SendEmailMessage handleCloseEmail={handleCloseEmail} />
                  </Box>
                </Modal>
              </>
            }
            {(isMatchLg || isMatchMd) && 
              <>
                <Modal
                    open={openFormModal}
                    onClose={handleClose}
                    aria-labelledby="sign-up"
                    aria-describedby="sign-up-form"
                >
                  <Box sx={{...SignUpStyle}}> 
                    <SignUpForm  
                      handleClose={handleClose} 
                      handleOpenEmail={handleOpenEmail}
                    />
                  </Box>
                </Modal>
                <Modal
                  open={openEmailModal}
                  onClose={handleCloseEmail}
                  aria-labelledby="email-message"
                  aria-describedby="send-email-message"
                >
                <Box sx={{...EmailMessageStyle}}> 
                    <SendEmailMessage handleCloseEmail={handleCloseEmail} />
                </Box>
                </Modal>
              </>
            }
             {children}
        </div>
    )
};
export default Layout;