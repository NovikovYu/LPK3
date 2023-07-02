import * as React from 'react';
import SignUpForm from "@/feature/sign-up/sign-up-form";
import SignInForm from "@/feature/sign-in/sign-in-form";
import ForgotPasswordForm from "@/feature/sign-in/forgot-password";
import useMediaQuery from '@mui/material/useMediaQuery';
import ForgotPasswordMessage from '@/feature/sign-in/message-forgot-password';
import SignUpMessage from '@/feature/sign-up/email-message';
import {useTheme} from '@mui/material/styles';
import {Modal} from "@mui/material";
import {
  ForgotPasswordMessageStyleBox,
  ForgotPasswordStyleBox,
  SignInStyleBox,
  SignUpMessageStyleBox,
  SignUpStyleBox, 
} from "./Header-style";


interface Props {
    handleCloseSignInModal: () => void;
    openFormSignInModal: boolean;
};

enum Modules {
    SIGN_IN ='signIn',
    SIGN_IN_MESSAGE ='signInMessage',
    FORGOT_PASSWORD ='forgotPassword',
    FORGOT_PASSWORD_MESSAGE ='forgotPasswordMessage',
    SIGN_UP ='signUp',
    SIGN_UP_MESSAGE ='signUpMessage',
};
  
interface OpenModalState {
    signIn: boolean,
    forgotPassword: boolean,
    forgotPasswordMessage: boolean,
    signUp: boolean,
    signUpMessage: boolean,
};

const openModalStates = {
   [Modules.SIGN_IN]: false,
   [Modules.FORGOT_PASSWORD]: false,
   [Modules.FORGOT_PASSWORD_MESSAGE]: false,
   [Modules.SIGN_UP]: false,
   [Modules.SIGN_UP_MESSAGE]: false,
};

const ModalForm = ({handleCloseSignInModal, openFormSignInModal}:Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openModalState, setOpenModalState] = React.useState<OpenModalState>({
    ...openModalStates
  });

  const handleOpenModal = (name: keyof typeof openModalStates, value: boolean) => {
    setOpenModalState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  
  return (
    <>
        <Modal
          open={openFormSignInModal}
          onClose={handleCloseSignInModal}
          aria-labelledby="sign-in"
          aria-describedby="sign-in-form"
        >
          <SignInStyleBox> 
            <SignInForm
              handleCloseSignInModal={handleCloseSignInModal} 
              handleOpenSignUpModal={() => handleOpenModal(Modules.SIGN_UP, true)}
              handleOpenForgotPasswordModal={()=> handleOpenModal(Modules.FORGOT_PASSWORD, true)}
              isMobile={isMobile}
            />
          </SignInStyleBox>                  
        </Modal>
        <Modal
          open={openModalState.forgotPassword}
          onClose= {() => handleOpenModal(Modules.FORGOT_PASSWORD, false)}
          aria-labelledby="forgot-password"
          aria-describedby="forgot-password-form"
        >
          <ForgotPasswordStyleBox> 
            <ForgotPasswordForm
              handleCloseForgotPasswordModal={()=> handleOpenModal(Modules.FORGOT_PASSWORD, false)}
              handleOpenForgotPasswordMessageModal={()=> handleOpenModal(Modules.FORGOT_PASSWORD_MESSAGE, true)}
              isMobile={isMobile}
            />
          </ForgotPasswordStyleBox>                  
        </Modal>
        <Modal
          open={openModalState.forgotPasswordMessage}
          onClose={()=> handleOpenModal(Modules.FORGOT_PASSWORD_MESSAGE, false)}
          aria-labelledby="forgot-password"
          aria-describedby="forgot-password-form"
        >
          <ForgotPasswordMessageStyleBox> 
            <ForgotPasswordMessage
              handleCloseForgotPasswordMessageModal={()=> handleOpenModal(Modules.FORGOT_PASSWORD_MESSAGE, false)}
              isMobile={isMobile}
            />
          </ForgotPasswordMessageStyleBox>                  
        </Modal>
        <Modal
            open={openModalState.signUp}
            onClose={() => handleOpenModal(Modules.SIGN_UP, false)}
            aria-labelledby="sign-up"
            aria-describedby="sign-up-form"
        >
              <SignUpStyleBox> 
                <SignUpForm
                  handleCloseSignUpModal={() => handleOpenModal(Modules.SIGN_UP, false)}
                  handleOpenEmail={()=> handleOpenModal(Modules.SIGN_UP_MESSAGE, true)}
                  isMobile={isMobile}
                />
              </SignUpStyleBox>                  
          </Modal>
          <Modal
              open={openModalState.signUpMessage}
              onClose={()=> handleOpenModal(Modules.SIGN_UP_MESSAGE, false)}
              aria-labelledby="email-message"
              aria-describedby="send-email-message"
            >
              <SignUpMessageStyleBox> 
                <SignUpMessage handleCloseEmail={()=> handleOpenModal(Modules.SIGN_UP_MESSAGE, false)} isMobile={isMobile} />
              </SignUpMessageStyleBox>
            </Modal>
 </>
  )
};
export default ModalForm;