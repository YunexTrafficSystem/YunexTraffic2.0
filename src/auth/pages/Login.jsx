import React from 'react';
import { Button, TextField, Link, Grid, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { BasicDesing } from '../layout/BasicDesing';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    main: {
        backgroundColor: '#e2edf3',
    },
    card: {
        backgroundColor: '#fff',
    },
    green: {
        backgroundColor: '#abb8c3'
    }
}));




export const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const classes = useStyles();

    return (
        <BasicDesing tittle='INICIO DE SESIÓN'>
            <form>
                {/**validacion de los datos ingresados del formulario */}
                <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate >
                    {/* Estrucura del formulario */}
                    <Grid item xs={12} sm={12}>
                        <TextField
                            variant='outlined'
                            margin='dense'
                            required
                            fullWidth
                            type='email'
                            label='Correo Electrónico'
                            autoFocus
                            {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                        />
                        <TextField
                            margin='dense'
                            required
                            fullWidth
                            label='Contraseña'
                            type='password'
                            id='password'
                            {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                        />
                        <Grid
                            container
                            justifyContent='center'
                        >
                            <Grid
                                item
                            >
                                <Button
                                    type='submit'
                                    variant='contained'
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Ingresar
                                </Button>
                            </Grid>
                        </Grid>

                        {/**Opciones al final del formulario*/}
                        <Grid container alignItems='bottom'>
                            <Grid item xs>
                                <Link variant='body2' to='/forgot' underline='none' component={RouterLink}>
                                    Olvide mi contraseña
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link variant='body2' to='/Register' underline='none' component={RouterLink} >
                                    No tengo cuenta
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </BasicDesing>
    )
}
