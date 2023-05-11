import * as React from 'react';
import * as yup from 'yup';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import CloseIcon from '@mui/icons-material/Close';
import { yupResolver } from '@hookform/resolvers/yup';
import { theme } from '@/pages/_app';
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
    MenuItem, 
    Modal, 
    OutlinedInput, 
    TextField, 
    ThemeProvider, 
    Typography
} from '@mui/material';
import SendEmailMessage from './email-message';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { EmailMessageStyle } from '@/components/Layout/styles';

  type ISignUpForm = {
    name: string,
    lastName: string,
    email:string,
    phone:number,
    password:string,
    repeatPassword:string,
    isAccepted: boolean,
    country: string
  };

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
    phone: yup.number()
    .required("Input your number")
    .positive("Phone must be a positive number")
    .integer("'Please enter a valid phone number'"),
    email: yup.string()
    .matches(REG_EMAIL, "Email should have correct format")
    .required("Input your email"),
    password: yup.string()
    .matches(REG_PASSWORD, " ")
    .min(8, "Password must be more then 8 characters")
    .required("Input your password"),
    repeatPassword: yup.string()
    .min(8, "Password must be more then 8 characters")
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required("Input your password"),
    country: yup.string().required("Please select your country"),
    isAccepted: yup.bool()
    .required("You need to agree with the terms&conditions")
    .oneOf([true], "You need to agree with the terms&conditions")
})

const countries = [
    {
      value: 'Finland',
      label: 'Finland',
    },
    {
      value: 'France',
      label: 'France',
    },
    {
      value: 'Spain',
      label: 'Spain',
    },,
  ];

const SignUpForm = () => {

    const [openEmail, setOpenEmail] = React.useState(false);
    const handleOpenEmail = () => {
      setOpenEmail(true);
    };
    const handleCloseEmail = () => {
      setOpenEmail(false);
    };
    const [openForm, setOpenForm] = React.useState(true);
    const handleCloseForm = () => {
        setOpenForm(false);
      };

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
    const {errors} = useFormState({
        control
    });
   
    const onSubmit:SubmitHandler<ISignUpForm>=(data)=>{
        if (isValidForm(data)) {
            console.log('yes');
            handleCloseForm();
            handleOpenEmail();
        } 
        else errors;
    };

    const isValidForm=(data:ISignUpForm) => schema.isValidSync(data);
    
    return (
        <>
            <ThemeProvider theme={theme}>
                    <IconButton 
                        aria-label="Close form" 
                        sx={{position: "relative", left:415, right:0, top:35}}
                        onClick={handleCloseForm}
                        >
                        <CloseIcon />
                    </IconButton>
                    <Typography 
                        variant="h5" 
                        component="h2"  
                        sx={{fontWeight:400,  pb:4, pl:5,display:"flex",  alignItems: "flex-start", flexGrow:1, flexDirection:"row"}}
                    >
                        Sign up
                    </Typography>
                    <Box 
                        component="form" 
                        autoComplete="off" 
                        sx={{minWidth:424, minHeight:460, pl:4, pr:4, pt:1}}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Controller
                            control={control}
                            name="name"
                            render={({...field}) => (
                                <TextField 
                                id="reg-form-name" 
                                label="Name" 
                                variant="outlined" 
                                sx={{pr:5, pb:3}} 
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
                                <TextField 
                                    id="reg-form-last-name" 
                                    label="Last Name" 
                                    variant="outlined"
                                    error={!!errors.lastName?.message}
                                    helperText={errors.lastName?.message}
                                    sx={{pb:2}} 
                                    value={field.field.value || ''}
                                    onChange={field.field.onChange}  
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="email"
                            render={({...field}) => (
                                <TextField 
                                    fullWidth={true} 
                                    id="reg-form-email" 
                                    label="Email" 
                                    variant="outlined" 
                                    error={!!errors.email?.message}
                                    helperText={errors.email?.message}
                                    sx={{pb:3}}
                                    value={field.field.value || ''}
                                    onChange={ field.field.onChange}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="country"
                            render={({...field}) => (
                                <TextField
                                    id="reg-from-country"
                                    name='country'
                                    select
                                    label="Country"
                                    error={!!errors.country?.message}
                                    helperText="please select your country"
                                    defaultValue={''}
                                    value={field.field.value || ''}
                                    onChange={ field.field.onChange}
                                    sx={{pr:5.5, pb:3}}>
                                    {countries.map((option) => (
                                        <MenuItem 
                                            key={option?.value} 
                                            value={option?.value} 
                                            onChange={field.field.onChange}>
                                            {option?.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}
                        />
                        <Controller
                            control={control}
                            name="phone"
                            render={({...field}) => (
                                <TextField 
                                    id="reg-form-number" 
                                    label="Phone" 
                                    variant="outlined" 
                                    error={!!errors.phone?.message}
                                    helperText={errors.phone?.message}
                                    multiline
                                    rows={1}
                                    sx={{pb:3}}
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
                                <FormControl
                                     sx={{pb:2}} 
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
                                        sx={{mb:0.5}}
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
                                </FormControl>
                            )}}
                        />
                        <Controller
                            control={control}
                            name="repeatPassword"
                            render={({field}) => {
                                const {value: fieldValue, onChange} = field;
                                return (
                                <FormControl
                                     sx={{pb:1}} 
                                     fullWidth
                                     variant="outlined"
                                     error={!!errors.repeatPassword?.message}
                                     > 
                                    <InputLabel htmlFor="reg-form-repeat-password">Repeat Password</InputLabel>
                                    <OutlinedInput
                                        id="reg-form-repeat-password"
                                        label="Repeat Password"
                                        type={showRepeatPassword ? 'text' : 'password'}
                                        autoComplete="current-repeat-password"
                                        sx={{mb:0.5}}
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
                                    <FormHelperText>{errors.repeatPassword?.message}</FormHelperText>
                                </FormControl>
                            )}}
                        />
                        <Controller
                            control={control}
                            name="isAccepted"
                            render={({field, fieldState}) => {
                                const {value: fieldValue, onChange, onBlur} = field;
                                return (
                                    <FormControl error={!!errors.isAccepted?.message}>
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
                                    sx={{pl:2}}                                  
                                    />
                                    <FormHelperText sx={{pb:2}} >{errors.isAccepted?.message}</FormHelperText>
                                    </FormControl>
                                )
                            }}
                        />
                         <Button
                            type="submit" 
                            variant="contained" 
                            fullWidth={true} 
                            size="large" 
                            color="primary"
                            sx={{mb:4}}
                            onClick={handleCloseForm}
                            >
                            SIGN UP
                        </Button>
                        <Modal
                            open={openEmail}
                            onClose={handleCloseEmail}
                            aria-labelledby="email-message"
                            aria-describedby="send-email-message"
                        >
                            <Box sx={{...EmailMessageStyle}}>
                                <SendEmailMessage />
                                <Button
                                    variant="contained" 
                                    fullWidth={true} 
                                    size="large" 
                                    color='primary'
                                    sx={{width:400, height:42, ml:6, mt:8, mb:4}}
                                    onClick={handleCloseForm}>
                                    OK
                                </Button>
                            </Box>
                        </Modal>
                    </Box>
            </ThemeProvider>
        </>
    );
};

export default SignUpForm;