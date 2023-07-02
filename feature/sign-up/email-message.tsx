import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {
    ButtonMessage,
    CloseIconButton,
    EmailBox, 
    FormHeaderName, 
    MessageBox,
    MessageTypography
} from './style-sign-up-form';

interface Props {
    handleCloseEmail: () => void;
    isMobile: boolean;
  }

const SignUpMessage = ({handleCloseEmail, isMobile}:Props) => {
    const ButtonSize = isMobile ? 'small' : 'large';
    return (
            <EmailBox>
                <MessageBox>
                    <FormHeaderName>
                        We sent an email
                    </FormHeaderName>
                    <CloseIconButton aria-label="Close form" onClick={handleCloseEmail}>
                        <CloseIcon />
                    </CloseIconButton>
                </MessageBox>
                <MessageTypography>
                    Check your inbox, follow the link provided in the email to confirm your mailbox
                </MessageTypography>
                <ButtonMessage
                  variant="contained" 
                  id='reg-message-button'
                  fullWidth
                  size={ButtonSize} 
                  color='primary'
                  onClick={handleCloseEmail}
                >
                    OK
                </ButtonMessage>
            </EmailBox>
    );
};
export default SignUpMessage;

