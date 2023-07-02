import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { 
    ButtonMessage, 
    CloseIconButton, 
    EmailBox, 
    FormHeaderName, 
    MessageBox, 
    MessageTypography 
} from '../sign-up/style-sign-up-form';

interface Props {
    handleCloseForgotPasswordMessageModal: () => void;
    isMobile: boolean;
  }

const ForgotPasswordMessage = ({handleCloseForgotPasswordMessageModal, isMobile}:Props) => {
    const ButtonSize = isMobile ? 'small' : 'large';
    console.log('sss');
    return (
        <EmailBox>
            <MessageBox>
                <FormHeaderName>
                    We sent an email
                </FormHeaderName>
                <CloseIconButton aria-label="Close form" onClick={handleCloseForgotPasswordMessageModal}>
                    <CloseIcon />
                </CloseIconButton>
            </MessageBox>
            <MessageTypography>
                We sent password recovery instructions to your email
            </MessageTypography>
            <ButtonMessage
            variant="contained" 
            id='reg-message-button'
            fullWidth
            size={ButtonSize} 
            color='primary'
            onClick={handleCloseForgotPasswordMessageModal}
            >
                got it
            </ButtonMessage>
        </EmailBox>
    );
};
export default ForgotPasswordMessage;