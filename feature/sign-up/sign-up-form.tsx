import * as React from 'react';
import 'react-phone-number-input/style.css';
import 'react-phone-input-2/lib/material.css';
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
    Checkbox, 
    FormControl, 
    IconButton, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
} from '@mui/material';
import {
    ButtonStyle,
    CloseIconButton,
    FormHeaderName,
    HelperText,
    HelperTextCheckbox,
    HelperTextPassword,
    InputBox, 
    InputField, 
    InputFormControl, 
    InputPassword, 
    LabelText, 
    SignUpBox, 
    SignUpBoxForm, 
    StyledPhoneInput,
} from './style-sign-up-form';
import { signAppSchema } from '../utils/validation/common-validation';

type SignUpFormTypes = {
    name: string,
    lastName: string,
    email:string,
    phone:string,
    password:string,
    repeatPassword:string,
    isAccepted: boolean,
    country: string
};

interface Props {
    handleCloseSignUpModal: () => void;
    handleOpenEmail: () => void;
    isMobile: boolean;
}

const EXCLUDE_COUNTRIES = ['ru', 'by'];

const SignUpForm = ({handleCloseSignUpModal, handleOpenEmail, isMobile}:Props) => {
    const InputSize = isMobile ? 'small' : 'medium';
    const ButtonSize = isMobile ? 'small' : 'large';
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);;
    const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);
    const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {handleSubmit, control} = useForm<SignUpFormTypes>({
        mode: 'onChange',
        resolver: yupResolver(signAppSchema),
        defaultValues: {
            isAccepted: false
        }
    });

    const {errors, isValid} = useFormState({
        control
    });
   
    const onSubmit:SubmitHandler<SignUpFormTypes>=(data)=>{
        if (isValidForm(data)) {
                console.log(data);
                handleCloseSignUpModal();
                handleOpenEmail();
        } 
        else errors;
    };

    const isValidForm=(data:SignUpFormTypes) => signAppSchema.isValidSync(data);
    return (
            <SignUpBoxForm>
                <SignUpBox>
                    <FormHeaderName>
                        Sign up
                    </FormHeaderName>
                    <IconButton 
                        aria-label="Close form" 
                        onClick={handleCloseSignUpModal}
                    >
                        <CloseIconButton />
                    </IconButton>
                </SignUpBox>
                <Box 
                    component="form" 
                    autoComplete="off" 
                    onSubmit={handleSubmit(onSubmit)}
                >
                <InputBox>
                    <Controller
                        control={control}
                        name="name"
                        render={({field, fieldState}) => (
                            <InputField
                                id="reg-form-name" 
                                fullWidth
                                label="First Name"
                                size={InputSize}
                                variant="outlined"
                                value={field.value || ''}
                                error={!!fieldState.error?.message}
                                helperText={fieldState.error?.message}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="lastName"
                        render={({field, fieldState}) => (
                            <InputField 
                                id="reg-form-last-name" 
                                fullWidth
                                label="Last Name" 
                                size={InputSize}
                                variant="outlined"
                                error={!!fieldState.error?.message}
                                helperText={fieldState.error?.message}
                                value={field.value || ''}
                                onChange={field.onChange}  
                            />
                        )}
                    />
                </InputBox>
                    <Controller
                        control={control}
                        name="email"
                        render={({field, fieldState}) => (
                            <InputField
                                id="reg-form-email" 
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
                        name="phone"
                        render={({field, fieldState}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                                <InputFormControl error={!!fieldState.error?.message} fullWidth>
                                        <StyledPhoneInput
                                            excludeCountries={EXCLUDE_COUNTRIES}
                                            defaultErrorMessage={fieldState.error?.message}
                                            value={fieldValue} 
                                            inputClass={(!!fieldState.error?.message) ? 'invalid-number' : ''}
                                            onChange={onChange}
                                            inputStyle={{width:'100%'}}
                                        />
                                    <HelperText>{fieldState.error?.message}</HelperText>
                                </InputFormControl>
                            )}
                        }
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({field, fieldState}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                            <InputPassword
                                fullWidth
                                variant="outlined"
                                error={!!fieldState.error?.message}
                                size={InputSize}
                                > 
                                <InputLabel htmlFor="reg-form-password">Password</InputLabel>
                                <OutlinedInput
                                    id='reg-form-password'
                                    label='Password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    value={fieldValue || ''}
                                    onChange={onChange}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                id='reg-form-password-eye'
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge='end'
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
                            </InputPassword>
                        )}}
                    />
                    <Controller
                        control={control}
                        name="repeatPassword"
                        render={({field, fieldState}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                            <InputPassword
                                fullWidth
                                variant="outlined"
                                error={!!fieldState.error?.message}
                                size={InputSize}
                                > 
                                <InputLabel htmlFor="reg-form-repeat-password">Repeat Password</InputLabel>
                                <OutlinedInput
                                    id="reg-form-repeat-password"
                                    label="Repeat Password"
                                    type={showRepeatPassword ? 'text' : 'password'}
                                    autoComplete="current-repeat-password"
                                    value={fieldValue || ''}
                                    onChange={onChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowRepeatPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showRepeatPassword? <VisibilityOff fontSize={isMobile ? 'small' : 'medium'}/> : <Visibility fontSize={isMobile ? 'small' : 'medium'}/>}
                                            </IconButton>
                                        </InputAdornment>
                                    }   
                                />
                                <HelperTextPassword>{fieldState.error?.message}</HelperTextPassword>
                            </InputPassword>
                        )}}
                    />
                    <Controller
                        control={control}
                        name="isAccepted"
                        render={({field, fieldState}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                                <FormControl error={!!fieldState.error?.message}>
                                    <LabelText
                                        id='reg-form-accepted'
                                        label="I apply terms&conditions"
                                        control={
                                            <Checkbox
                                                checked={fieldValue}
                                                onChange={onChange}
                                                id='reg-form-checkbox'
                                                color={fieldState.error ? 'error' : 'secondary'} 
                                                size={InputSize}
                                            />
                                        }
                                        labelPlacement="end"               
                                    />
                                    <HelperTextCheckbox>{fieldState.error?.message}</HelperTextCheckbox>
                                </FormControl>
                            )
                        }}
                    />
                    <ButtonStyle
                        type="submit" 
                        id='reg-form-button'
                        variant="contained" 
                        fullWidth
                        size={ButtonSize} 
                        color="primary"
                        sx={isMobile ? {fontSize:'small'} : {fontSize:'medium'}}
                    >
                        SIGN UP
                    </ButtonStyle>
                </Box>
        </SignUpBoxForm>
    );
};

export default SignUpForm;