import * as React from 'react';
import { MessageTypography} from '@/feature/sign-up/style-sign-up-form';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
    ChangePasswordButtonStyle,
    ChangePasswordMessageBox, 
    ChangePasswordMessageHeading 
} from '@/feature/style-home';

const ChangePasswordMessage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const ButtonSize = isMobile ? 'small' : 'large';
    const ButtonStyled = isMobile ? 'small' : 'medium';
    return (
            <ChangePasswordMessageBox>
                <ChangePasswordMessageHeading>
                    Password was changed
                </ChangePasswordMessageHeading>
                <MessageTypography>
                    Password changed successfully. Sign In
                </MessageTypography>
                <ChangePasswordButtonStyle
                        type="submit" 
                        id="change-password-form-button"
                        variant="contained" 
                        fullWidth
                        size={ButtonSize} 
                        sx={{ButtonStyled}}
                        href='/'  
                    >
                        sign in
                    </ChangePasswordButtonStyle>
            </ChangePasswordMessageBox>
    );
};
export default ChangePasswordMessage;

