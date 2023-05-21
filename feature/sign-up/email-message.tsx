import * as React from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import CloseIcon from '@mui/icons-material/Close';
import {Button, IconButton} from '@mui/material';
import { EmailBox, EmailTypography, MessageBox, MessageTypography } from './sign-up-form-style';

interface Props {
    handleCloseEmail: () => void;
  }

const SendEmailMessage = ({handleCloseEmail}:Props) => {
    return (
            <EmailBox>
                <MessageBox>
                    <EmailTypography
                        variant="h4"
                    >
                        We sent an email
                    </EmailTypography>
                    <IconButton aria-label="Close form">
                        <CloseIcon onClick={handleCloseEmail} />
                    </IconButton>
                </MessageBox>
                <MessageTypography
                    variant="body1"
                >
                    Check your inbox, follow the link provided in the email to confirm your mailbox
                </MessageTypography>
                <Button
                  variant="contained" 
                  fullWidth
                  size="large" 
                  color='primary'
                  onClick={handleCloseEmail}
                >
                    OK
                </Button>
            </EmailBox>
    );
};
export default SendEmailMessage;

