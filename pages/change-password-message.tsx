import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  ChangePasswordButtonStyle,
  ChangePasswordMessageBox,
  ChangePasswordMessageHeading,
} from '@/feature/style-home';
import { MessageRestyled } from '@/feature/sign-up/style-sign-up-form';

const ChangePasswordMessage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const ButtonSize = isMobile ? 'small' : 'large';
  return (
    <ChangePasswordMessageBox>
      <ChangePasswordMessageHeading>
        Password was changed
      </ChangePasswordMessageHeading>
      <MessageRestyled>Password changed successfully. Sign In</MessageRestyled>
      <ChangePasswordButtonStyle
        type="submit"
        id="change-password-form-button"
        variant="contained"
        fullWidth
        size={ButtonSize}
        href="/"
      >
        sign in
      </ChangePasswordButtonStyle>
    </ChangePasswordMessageBox>
  );
};
export default ChangePasswordMessage;
