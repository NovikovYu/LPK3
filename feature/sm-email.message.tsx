import * as React from 'react';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import CloseIcon from '@mui/icons-material/Close';
import {Button, IconButton, Typography } from '@mui/material';
import {EmailBoxSm, EmailTypographySm, MessageBoxSm, MessageTypographySm} from '@/components/Layout/styles';

interface Props {
    handleCloseEmail: () => void;
  }

const SendEmailMessageSm = ({handleCloseEmail}:Props) => {
    return (
            <EmailBoxSm>
                <MessageBoxSm>
                    <EmailTypographySm
                        variant="h4"
                    >
                        We sent an email
                    </EmailTypographySm>
                    <IconButton aria-label="Close form">
                        <CloseIcon onClick={handleCloseEmail} fontSize='small'/>
                    </IconButton>
                </MessageBoxSm>
                <MessageTypographySm
                    variant="body1"
                >
                    Check your inbox, follow the link provided in the email to confirm your mailbox
                </MessageTypographySm>
                <Button
                  variant="contained" 
                  fullWidth
                  size="small" 
                  color='primary'
                  onClick={handleCloseEmail}
                  sx={{fontSize:'small'}}
                >
                     OK
                </Button>
            </EmailBoxSm>
    );
};
export default SendEmailMessageSm;

