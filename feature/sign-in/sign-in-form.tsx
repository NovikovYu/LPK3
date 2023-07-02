import * as React from 'react';
import { signInSchema } from '../utils/validation/common-validation';
import {yupResolver} from '@hookform/resolvers/yup';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { 
    Controller, 
    SubmitHandler, 
    useForm, 
    useFormState
} from 'react-hook-form';
import {
    Box,  
    IconButton, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
} from '@mui/material';
import {
    InputLabelForgotPassword, 
    InputPasswordSignIn, 
    SendIconButtonStyle, 
    SignInBox, 
    SignInButtonStyle, 
    SignUpButtonStyle, 
    SignInBoxForm
} from './style-sign-in'
import {
    CloseIconButton, 
    FormHeaderName, 
    HelperTextPassword, 
    InputField,
} from '../sign-up/style-sign-up-form';

  type SignInFormTypes = {
    email:string,
    password:string,
  };

  interface Props {
    handleCloseSignInModal: () => void;
    handleOpenSignUpModal: () => void;
    handleOpenForgotPasswordModal: () => void;
    isMobile: boolean;
  }

const SignInForm = ({handleCloseSignInModal, handleOpenSignUpModal, handleOpenForgotPasswordModal, isMobile}:Props) => {
    const InputSize=isMobile ? 'small' : 'medium';
    const ButtonSize=isMobile ? 'small' : 'large';
    const [loading, setLoading] = React.useState(true);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {handleSubmit, control} = useForm<SignInFormTypes>({
        mode: 'onChange',
        resolver: yupResolver(signInSchema),
    });

    const {errors, isValid} = useFormState({
        control
    });
   
    const LoadingButtonsTransition = () => {
          setLoading(true);
    }

    const onSubmit:SubmitHandler<SignInFormTypes>=(data)=>{
        if (isValidForm(data)) {
                LoadingButtonsTransition();
                console.log(data);
                handleCloseSignInModal();
        } 
        else errors;
    };

    const isValidForm=(data:SignInFormTypes) => signInSchema.isValidSync(data);
    
    const ControlForms = () => {
        handleOpenSignUpModal();
        handleCloseSignInModal();
    };
    const ForgotPasswordForm = () => {
        handleCloseSignInModal();
        handleOpenForgotPasswordModal();
    }
    return (
            <SignInBoxForm>
                <SignInBox>
                <FormHeaderName>
                        Sign in
                    </FormHeaderName>
                    <IconButton 
                        aria-label="Close form" 
                        onClick={handleCloseSignInModal}
                    >
                        <CloseIconButton />
                    </IconButton>
                </SignInBox>
                <Box 
                    component="form" 
                    autoComplete="off" 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Controller
                        control={control}
                        name="email"
                        render={({field, fieldState}) => (
                            <InputField
                                id="auth-form-email" 
                                fullWidth
                                label="Email" 
                                size={InputSize}
                                variant="outlined" 
                                error={!!fieldState.error?.message}
                                helperText={fieldState.error?.message}
                                value={field.value || ''}
                                onChange={ field.onChange}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({field, fieldState}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                            <InputPasswordSignIn
                                id="auth-form-password"
                                fullWidth
                                variant="outlined"
                                error={!!fieldState.error?.message}
                                size={InputSize}
                                >
                                <InputLabel htmlFor="auth-form-password" id='auth-form-password'>Password</InputLabel>
                                <OutlinedInput
                                    id='auth-form-password'
                                    label='Password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    value={fieldValue || ''}
                                    onChange={onChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff fontSize={isMobile ? 'small' : 'medium'} /> : <Visibility fontSize={isMobile ? 'small' : 'medium'} />}
                                            </IconButton>
                                        </InputAdornment>
                                    }   
                                />
                                <HelperTextPassword error={false}>
                                    The password must be more than 8 characters and 
                                    contain at least one capital letter, a special sign !@#$%^&* and a number
                                </HelperTextPassword>
                                <HelperTextPassword>{fieldState.error?.message}</HelperTextPassword>
                            </InputPasswordSignIn>
                        )}}
                    />
                    <InputLabelForgotPassword htmlFor="auth-forgot-password" id='auth-form-forgot-password' onClick={ForgotPasswordForm}>Forgot a password?</InputLabelForgotPassword>
                    <SignInButtonStyle
                        loading={false}
                        loadingPosition="end"
                        type="submit" 
                        variant="contained" 
                        fullWidth
                        size={ButtonSize}
                        color="primary"
                        endIcon={<SendIconButtonStyle />}
                        sx={isMobile ? {fontSize:'small'} : {fontSize:'medium'}}
                        >
                        <span>sign in</span>
                    </SignInButtonStyle>
                    <SignUpButtonStyle
                        type="submit" 
                        id="auth-form-button"
                        fullWidth
                        size={ButtonSize}
                        sx={isMobile ? {fontSize:'small'} : {fontSize:'medium'}}
                        onClick={ControlForms}
                    >
                        sign up
                    </SignUpButtonStyle>
                </Box>
        </SignInBoxForm>
    );
};

export default SignInForm;