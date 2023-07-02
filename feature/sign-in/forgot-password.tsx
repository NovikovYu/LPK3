import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {yupResolver} from '@hookform/resolvers/yup';
import {schemaEmailValidation} from '../utils/validation/common-validation';
import {Box} from '@mui/material';
import { ButtonStyle } from '../sign-up/style-sign-up-form';
import { 
    ForgotPasswordBox, 
    ForgotPasswordFormBox,
    ForgotPasswordFormHeaderName,
    ForgotPasswordFormIconButton,
    InputFieldForgotPassword, 
} from './style-sign-in';
import { 
    Controller, 
    SubmitHandler, 
    useForm, 
    useFormState
} from 'react-hook-form';

interface Props {
    handleCloseForgotPasswordModal: () => void;
    handleOpenForgotPasswordMessageModal: () => void;
    isMobile: boolean;
};

type ForgotPasswordFormTypes = {
    email:string
};

const ForgotPasswordForm = ({handleCloseForgotPasswordModal, handleOpenForgotPasswordMessageModal, isMobile}:Props) => {
    const InputSize=isMobile ? 'small' : 'medium';
    const ButtonSize=isMobile ? 'small' : 'large';
    const {handleSubmit, control} = useForm<ForgotPasswordFormTypes>({
        mode: 'onChange',
        resolver: yupResolver(schemaEmailValidation),
    });

    const {errors, isValid} = useFormState({
        control
    });
   
    const onSubmit:SubmitHandler<ForgotPasswordFormTypes>=(data)=>{
        if (isValidForm(data)) {
                console.log(data);
                handleCloseForgotPasswordModal();
                handleOpenForgotPasswordMessageModal();
        } 
        else errors;
    };

    const isValidForm=(data:ForgotPasswordFormTypes) => schemaEmailValidation.isValidSync(data);

    return (
            <ForgotPasswordBox>
                <ForgotPasswordFormBox>
                    <ForgotPasswordFormHeaderName>
                        Forgot a password?
                    </ForgotPasswordFormHeaderName>
                    <ForgotPasswordFormIconButton
                        aria-label="Close-form" 
                        onClick={handleCloseForgotPasswordModal}
                    >
                        <CloseIcon />
                    </ForgotPasswordFormIconButton>
                </ForgotPasswordFormBox>
                <Box 
                    component="form" 
                    autoComplete="off" 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Controller
                        control={control}
                        name="email"
                        render={({field, fieldState}) => (
                            <InputFieldForgotPassword
                                id="forgot-password-form-email" 
                                fullWidth
                                label="Email" 
                                size={InputSize}
                                variant="outlined" 
                                error={!!fieldState.error?.message}
                                helperText={fieldState.error?.message}
                                value={field.value || ''}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <ButtonStyle
                        type="submit" 
                        id='forgot-password-form-button'
                        variant="contained" 
                        fullWidth
                        size={ButtonSize}
                        color='primary'
                    >
                        Send email
                    </ButtonStyle>
                </Box>
            </ForgotPasswordBox>
        );
};
export default ForgotPasswordForm;