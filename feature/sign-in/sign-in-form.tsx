import * as React from 'react';
import * as yup from 'yup';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import CloseIcon from '@mui/icons-material/Close';
import {yupResolver} from '@hookform/resolvers/yup';
import 'react-phone-number-input/style.css';
import 'react-phone-input-2/lib/material.css';
import styles from './PhoneStyle.module.css'
import PhoneInput from 'react-phone-input-2';
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
    Typography
} from '@mui/material';
import {
    BoxForm,
    InputBox, 
    InputField, 
    InputFormControl, 
    InputPassword, 
    SignInBox 
} from './style-sign-in'


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

  const REG_EMAIL= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const REG_PASSWORD=/^.*((?=.*[!@#$%^&*\:]))(?=.*\d)((?=.*[a-z]))((?=.*[A-Z])).*$/;

const schema = yup.object().shape({
    email: yup.string()
    .matches(REG_EMAIL, "Email should have correct format")
    .required("Input your email"),
    password: yup.string()
    .matches(REG_PASSWORD, " ")
    .min(8, "Password must be more then 8 characters")
    .required("Input your password"),
})


const SignInForm = ({handleClose, handleOpenEmail}:Props) => {

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
                <SignInBox>
                    <Typography 
                        variant="h5" 
                        component="h2"  
                    >
                        Sign in
                    </Typography>
                    <IconButton 
                        aria-label="Close form" 
                    >
                        <CloseIcon onClick={handleClose} />
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
                        render={({...field}) => (
                            <InputField
                                id="reg-form-email" 
                                fullWidth
                                label="Email" 
                                variant="outlined" 
                                error={!!errors.email?.message}
                                helperText={errors.email?.message}
                                value={field.field.value || ''}
                                onChange={ field.field.onChange}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({field}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                            <InputPassword
                                fullWidth
                                variant="outlined"
                                error={!!errors.password?.message}
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
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }   
                                />
                                <FormHelperText>
                                    The password must be more than 8 characters and 
                                    contain at least one capital letter, a special sign and a number
                                </FormHelperText>
                                <FormHelperText>{errors.password?.message}</FormHelperText>
                            </InputPassword>
                        )}}
                    />
                    <Button
                        type="submit" 
                        variant="contained" 
                        fullWidth
                        size="large" 
                        color="primary"
                    >
                        SIGN IN
                    </Button>
                    <Button
                        type="button" 
                        variant="text" 
                        fullWidth
                        size="large" 
                    >
                        SIGN IN
                    </Button>
                </Box>
        </BoxForm>
    );
};

export default SignInForm;