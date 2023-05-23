import * as React from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import CloseIcon from '@mui/icons-material/Close';
import {Button, IconButton} from '@mui/material';
import { ButtonMessage, EmailBox, EmailTypography, MessageBox, MessageTypography } from './style-sign-up-form';

interface Props {
    handleCloseEmail: () => void;
  }

const SendEmailMessage = ({handleCloseEmail}:Props) => {
    return (
            <EmailBox>
                <MessageBox>
                    <EmailTypography
                    >
                        We sent an email
                    </EmailTypography>
                    <IconButton aria-label="Close form">
                        <CloseIcon onClick={handleCloseEmail} />
                    </IconButton>
                </MessageBox>
                <MessageTypography
                >
                    Check your inbox, follow the link provided in the email to confirm your mailbox
                </MessageTypography>
                <ButtonMessage
                  variant="contained" 
                  fullWidth
                  size="large" 
                  color='primary'
                  onClick={handleCloseEmail}
                >
                    OK
                </ButtonMessage>
            </EmailBox>
    );
};
export default SendEmailMessage;

