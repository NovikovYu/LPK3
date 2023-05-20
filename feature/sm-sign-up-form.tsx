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
    FormControlLabel, 
    IconButton, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
    Typography
} from '@mui/material';
import {
    BoxFormSm, 
    HelperTextSm, 
    InputFieldSm, 
    InputFormControlSm, 
    InputPasswordSm, 
    SignUpBox 
} from '@/components/Layout/styles';


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
    .min(2, "Name must be more then 2 characters")
    .max(50, "Name must be less than 50 characters"),
    lastName: yup.string()
    .required("Input your last name")
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


const SignUpFormSm = ({handleClose, handleOpenEmail}:Props) => {

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
            <BoxFormSm>
                <SignUpBox>
                    <Typography 
                        variant="h5" 
                        component="h2"
                        sx={{fontSize:18}}
                    >
                        Sign up
                    </Typography>
                    <IconButton 
                        aria-label="Close form" 
                    >
                        <CloseIcon onClick={handleClose} fontSize='small'/>
                    </IconButton>
                </SignUpBox>
                <Box 
                    component="form" 
                    autoComplete="off" 
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Controller
                        control={control}
                        name="name"
                        render={({...field}) => (
                            <InputFieldSm
                                id="reg-form-name" 
                                fullWidth
                                size='small'
                                label="Name"
                                variant="outlined"
                                value={field.field.value || ''}
                                error={!!errors.name?.message}
                                helperText={errors.name?.message}
                                onChange={field.field.onChange}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="lastName"
                        render={({...field}) => (
                            <InputFieldSm 
                                id="reg-form-last-name" 
                                fullWidth
                                size='small'
                                label="Last Name" 
                                variant="outlined"
                                error={!!errors.lastName?.message}
                                helperText={errors.lastName?.message}
                                value={field.field.value || ''}
                                onChange={field.field.onChange}  
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="email"
                        render={({...field}) => (
                            <InputFieldSm
                                id="reg-form-email" 
                                size='small'
                                fullWidth
                                label="Email" 
                                error={!!errors.email?.message}
                                helperText={errors.email?.message}
                                variant="outlined" 
                                value={field.field.value || ''}
                                onChange={ field.field.onChange}
                                sx={{fontSize:'small'}}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="phone"
                        render={({field}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                                <InputFormControlSm error={!!errors.phone?.message}>
                                    <div className='phone'>
                                        <PhoneInput
                                            inputClass={styles.phone}
                                            excludeCountries={EXCLUDE_COUNTRIES}
                                            defaultErrorMessage={errors.phone?.message}
                                            value={fieldValue}
                                            onChange={onChange}
                                            inputStyle={{width:248, height:40}}    
                                        />
                                    </div>
                                    <HelperTextSm>{errors.phone?.message}</HelperTextSm>
                                </InputFormControlSm>
                            )}
                        }
                    />
                    <Controller
                        control={control}
                        name="password"
                        render={({field}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                            <InputPasswordSm
                                fullWidth
                                variant="outlined"
                                error={!!errors.password?.message}
                                size='small'
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
                                <HelperTextSm>
                                    The password must be more than 8 characters and 
                                    contain at least one capital letter, a special sign and a number
                                </HelperTextSm>
                                <HelperTextSm>{errors.password?.message}</HelperTextSm>
                            </InputPasswordSm>
                        )}}
                    />
                    <Controller
                        control={control}
                        name="repeatPassword"
                        render={({field}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                            <InputPasswordSm
                                fullWidth
                                variant="outlined"
                                error={!!errors.repeatPassword?.message}
                                size='small'
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
                                            >
                                                {showRepeatPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }   
                                />
                                <HelperTextSm>{errors.repeatPassword?.message}</HelperTextSm>
                            </InputPasswordSm>
                        )}}
                    />
                    <Controller
                        control={control}
                        name="isAccepted"
                        render={({field, fieldState}) => {
                            const {value: fieldValue, onChange} = field;
                            return (
                                <InputFormControlSm error={!!errors.isAccepted?.message}>
                                <FormControlLabel
                                label="I apply terms&conditions"
                                control={
                                    <Checkbox
                                        checked={fieldValue}
                                        onChange={onChange}
                                        color={fieldState.error ? 'error' : 'secondary'} 
                                    />
                                }
                                labelPlacement="end"
                                sx={{fontSize:'small'}}         
                                />
                                <HelperTextSm>{errors.isAccepted?.message}</HelperTextSm>
                                </InputFormControlSm>
                            )
                        }}
                    />
                    <Button
                        type="submit" 
                        variant="contained" 
                        fullWidth={true} 
                        color="primary"
                        sx={{fontSize:'small'}}
                    >
                        SIGN UP
                    </Button>
                </Box>
        </BoxFormSm>
    );
};

export default SignUpFormSm;