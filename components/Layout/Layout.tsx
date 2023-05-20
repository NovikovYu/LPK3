import { FC, PropsWithChildren } from "react";
import Header from "./header";
import * as React from 'react';
import { Box, Modal} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { EmailMessageStyle, EmailMessageStyleSm, SignUpStyle, SignUpStyleSm } from "./styles";
import SignUpForm from "@/feature/sign-up-form";
import SendEmailMessage from "@/feature/email-message";
import SignUpFormSm from "@/feature/sm-sign-up-form";
import SendEmailMessageSm from "@/feature/sm-email.message";

const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    const theme = useTheme();
    const isMatchLg = useMediaQuery(theme.breakpoints.up('lg'));
    const isMatchMd = useMediaQuery(theme.breakpoints.down('md'));
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
                    <SignUpFormSm
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
                    <SendEmailMessageSm handleCloseEmail={handleCloseEmail} />
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