import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from '@mui/material';
import {ButtonMessage, EmailBox, EmailTypography, MessageBox, MessageTypography} from './style-sign-up-form';

interface Props {
    handleCloseEmail: () => void;
    isMatchSm: boolean;
  }

const SendEmailMessage = ({handleCloseEmail, isMatchSm}:Props) => {
    return (
            <EmailBox>
                <MessageBox>
                    <EmailTypography>
                        We sent an email
                    </EmailTypography>
                    <IconButton aria-label="Close form" onClick={handleCloseEmail}>
                        <CloseIcon />
                    </IconButton>
                </MessageBox>
                <MessageTypography>
                    Check your inbox, follow the link provided in the email to confirm your mailbox
                </MessageTypography>
                <ButtonMessage
                  variant="contained" 
                  fullWidth
                  size={isMatchSm ? 'small' : 'large'} 
                  color='primary'
                  onClick={handleCloseEmail}
                >
                    OK
                </ButtonMessage>
            </EmailBox>
    );
};
export default SendEmailMessage;

