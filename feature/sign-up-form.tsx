import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, MenuItem, Stack, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import { Controller, SubmitHandler, useForm, useFormState } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//в Сontainer mt=10 - временный параметр. Добавила его, чтобы форма не прилипала к верхнему краю страницы
const theme = createTheme({
    palette: {
        secondary: {
        main: '#62AA5D',
        contrastText: '#fff'
      }
    },
  });

  type ISignUpForm = {
    name: string,
    lastName: string,
    email:string,
    phone:number,
    password:string,
    repeatPassword:string,
    convertion: boolean
  };
  
const schema = yup.object().shape({
    name: yup.string()
    .required("Input your name"),
    lastName: yup.string()
    .required("Input your last name"),
    phone: yup.number()
    .required("Input your number"),
    email: yup.string().email("Email should have correct format")
    .required("Input your email"),
    password: yup.string()
    .required("Input your password"),
    repeatPassword: yup.string()
    .required("Input your password"),
    convertion: yup.boolean()
    .required("You need to agree with the terms&conditions"),
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
    const {handleSubmit, control} = useForm<ISignUpForm>({
        resolver: yupResolver(schema),
    });
    const {errors} = useFormState({
        control
    });


    const onSubmit:SubmitHandler<ISignUpForm>=(data)=>console.log(data);

    return (
        <>
        <ThemeProvider theme={theme}>
        <Container fixed sx={{width:496, minHeight: 588, boxShadow:"0px 2px 10px", mt:10}}>
        <IconButton aria-label="Close-form" disableRipple={true}  sx={{position: "absolute", left:400, right:0, top:105}}>
            <CloseIcon />
        </IconButton>
        <Typography variant="h5" component="div"  sx={{fontWeight:400,  pb:4, pl:1,display:"flex",  alignItems: "flex-start", flexGrow:1, flexDirection:"row", pt:4}}>Sign up</Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off" sx={{width:424, minHeight:460, pl:0}}>
            <Controller
                control={control}
                name="name"
                render={({field}) => (
                    <TextField 
                    id="reg-form-name" 
                    label="Name" 
                    variant="outlined" 
                    sx={{pr:3, pb:2}} 
                    value={field.value ? field.value : ''}
                    error={!!errors.name?.message}
                    helperText={errors.name?.message}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange(event)}  
                    />
                )}
            />
            <Controller
                control={control}
                name="lastName"
                render={({field}) => (
                    <TextField 
                        id="reg-form-last-name" 
                        label="Last Name" 
                        variant="outlined"
                        error={!!errors.lastName?.message}
                        helperText={errors.lastName?.message}
                        sx={{pb:2}} 
                        value={field.value ? field.value : ''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange(event)}  
                    />
                )}
            />
            <Controller
                control={control}
                name="email"
                render={({field}) => (
                    <TextField 
                        fullWidth={true} 
                        id="reg-form-email" 
                        label="Email" 
                        variant="outlined" 
                        error={!!errors.email?.message}
                        helperText={errors.email?.message}
                        sx={{pb:2}}
                        value={field.value ? field.value : ''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange(event)}  
                    />
                )}
            />
            <TextField
                id="reg-from-country"
                select
                label="Country"
                helperText="Please select your country"
                defaultValue={''}
                sx={{pr:3, pb:1}}
            >
            {countries.map((option) => (
                <MenuItem key={option?.value} value={option?.value} >
                {option?.label}
                </MenuItem>
            ))}
            </TextField>
            <Controller
                control={control}
                name="phone"
                render={({field}) => (
                    <TextField 
                        id="reg-form-number" 
                        label="Phone" 
                        variant="outlined" 
                        error={!!errors.phone?.message}
                        helperText={errors.phone?.message}
                        multiline
                        rows={1}
                        sx={{pb:2}}
                        value={field.value ? field.value : ''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange(event)}  
                    />
                )}
            />
             <Controller
                control={control}
                name="password"
                rules={{minLength:8}}
                render={({field}) => (
                    <TextField 
                        fullWidth
                        id="reg-form-password"
                        label="Password"
                        type="password"
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                        autoComplete="current-password"
                        sx={{pb:2}}
                        value={field.value ? field.value : ''}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange(event)}  
                    />
                )}
            />
             <Controller
                control={control}
                rules={{minLength:8}}
                name="repeatPassword"
                render={({field}) => (
                     <TextField 
                     fullWidth
                     id="reg-form-repeat-password"
                     label="Repeat Password"
                     type="password"
                     autoComplete="current-password"
                     error={!!errors.repeatPassword?.message}
                     helperText={errors.repeatPassword?.message}
                     sx={{pb:2}}
                     value={field.value ? field.value : ''}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => field.onChange(event)} 
                    />
                )}
            />
            <Controller
                control={control}
                name="convertion"
                rules={{required: true}}
                render={() => (
                    <FormControlLabel
                    value="I apply terms&conditions"
                    control={<Checkbox />}
                    label="I apply terms&conditions"
                    labelPlacement="end"
                    sx={{pl:2, pb:2}}
                  />
                )}
            />

        <Button 
        type="submit" 
        variant="contained" 
        fullWidth={true} 
        size="large" 
        color='secondary' 
        sx={{mb:4, mt:2}}
        >
            SIGN UP
        </Button>
        </Box>
        </Container>
        </ThemeProvider>
        </>
    );
};

export default SignUpForm;