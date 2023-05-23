import * as React from 'react';
import * as yup from 'yup';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import CloseIcon from '@mui/icons-material/Close';
import {yupResolver} from '@hookform/resolvers/yup';
import 'react-phone-number-input/style.css';
import 'react-phone-input-2/lib/material.css';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { 
    Controller, 
    SubmitHandler, 
    useForm, 
    useFormState
} from 'react-hook-form';
import {
    Box, 
    Button, 
    Checkbox, 
    FormControl, 
    FormControlLabel, 
    FormHelperText,  
    IconButton, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
    Typography,
} from '@mui/material';
import {
    BoxForm,
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
    StyledPhoneInput,
    VisibilityButton,
    VisibilityOffButton
} from './style-sign-up-form';



  type ISignUpForm = {
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
    handleClose: () => void;
    handleOpenEmail: () => void;
  }

  const EXCLUDE_COUNTRIES = ['ru', 'by']
  const REG_EMAIL= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const REG_PASSWORD=/^.*((?=.*[!@#$%^&*\:]))(?=.*\d)((?=.*[a-z]))((?=.*[A-Z])).*$/;

const schema = yup.object().shape({
    name: yup.string()
    .required("Input your name")
    .matches(/^([^0-9]*)$/, "Name should not contain numbers")
    .min(2, "Name must be more then 2 characters")
    .max(50, "Name must be less than 50 characters"),
    lastName: yup.string()
    .required("Input your last name")
    .matches(/^([^0-9]*)$/, "Last Name should not contain numbers")
    .min(2, "Last name must be more then 2 characters")
    .max(50, "Last name must be less than 50 characters"),
    email: yup.string()
    .matches(REG_EMAIL, "Email should have correct format")
    .required("Input your email"),
    phone: yup.string()
    .required("Input your number"),
    password: yup.string()
    .matches(REG_PASSWORD, " ")
    .min(8, "Password must be more then 8 characters")
    .required("Input your password"),
    repeatPassword: yup.string()
    .min(8, "Password must be more then 8 characters")
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required("Input your password"),
    isAccepted: yup.bool()
    .required("You need to agree with the terms&conditions")
    .oneOf([true], "You need to agree with the terms&conditions")
})

const SignUpForm = ({handleClose, handleOpenEmail}:Props) => {

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const [showRepeatPassword, setShowRepeatPassword] = React.useState(false);

    const handleClickShowRepeatPassword = () => setShowRepeatPassword((show) => !show);
    
    const handleMouseDownRepeatPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const {handleSubmit, control} = useForm<ISignUpForm>({
        mode: 'onChange',
        resolver: yupResolver(schema),
        defaultValues: {
            isAccepted: false
        }
    });

    const {errors, isValid} = useFormState({
        control
    });
   
    const onSubmit:SubmitHandler<ISignUpForm>=(data)=>{
        if (isValidForm(data)) {
                console.log(data);
                handleClose();
                handleOpenEmail();
        } 
        else errors;
    };

    const isValidForm=(data:ISignUpForm) => schema.isValidSync(data);
    return (
            <BoxForm>
                <SignUpBox>
                    <FormHeaderName 
                    >
                        Sign up
                    </FormHeaderName>
                    <IconButton 
                        aria-label="Close form" 
                    >
                        <CloseIconButton onClick={handleClose} />
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
                                label="Name"
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
                                            disableInitialCountryGuess={true}   
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
                                > 
                                <InputLabel htmlFor="reg-form-password">Password</InputLabel>
                                <OutlinedInput
                                    id="reg-form-password"
                                    label="Password"
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
                                                disableRipple={true}
                                            >
                                                {showPassword ? <VisibilityOffButton /> : <VisibilityButton />}
                                            </IconButton>
                                        </InputAdornment>
                                    }   
                                />
                                <HelperTextPassword error={false}>
                                    The password must be more than 8 characters and 
                                    contain at least one capital letter, a special sign and a number
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
                                                onMouseDown={handleMouseDownRepeatPassword}
                                                edge="end"
                                                disableFocusRipple={true}
                                            >
                                                {showRepeatPassword ? <VisibilityOffButton /> : <VisibilityButton />}
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
                                label="I apply terms&conditions"
                                control={
                                    <Checkbox
                                        checked={fieldValue}
                                        onChange={onChange}
                                        color={fieldState.error ? 'error' : 'secondary'} 
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
                        variant="contained" 
                        fullWidth={true} 
                        size="large" 
                        color="primary"
                    >
                        SIGN UP
                    </ButtonStyle>
                </Box>
        </BoxForm>
    );
};

export default SignUpForm;