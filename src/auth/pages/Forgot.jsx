import React from 'react'
import { BasicDesing } from '../layout/BasicDesing'
import { Button, TextField, Link, Grid, Box, } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
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

export const Forgot = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();

  return (
    <BasicDesing tittle='RECUPERAR CONTRASEÑA'>
      <form>
        {/**Box que configura la validacion de los datos ingresados del formulario */}
        <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

          {/**Grid que configura como se ve los cuadros donde se ingresan los datos del formulario según el tamaño de la pantalla */}
          <Grid item xs={12} sm={12}>

            {/**Cuadro donde el Interesado ingresara su Correo Electrónico */}
            <TextField
              margin='normal'
              required
              fullWidth
              type='email'
              label='Correo Electronico'
              autoComplete='email'
              autoFocus
              {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
            />

            {/**Boton en el que al hacer click  enviara los datos obtenidos de los cuadros del formulario */}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Aceptar
            </Button>


            {/*Grid que contiene las opciones de regresar y de registrar */}
            <Grid container>

              {/**Link esta etiqueta lo enviara al Home  */}
              <Grid item xs>
                <Link to='/' variant='body2' component={RouteLink}>
                  Regresar
                </Link>
              </Grid>

              <Grid item>
                {/**Link esta etiqueta lo enviara al formulario de register si ya tiene cuenta */}
                <Link to='/signup' variant='body2' component={RouteLink}>
                  No tengo cuenta
                </Link>
              </Grid>

            </Grid>
          </Grid>

        </Box>
    </form>
    </BasicDesing >
  )
}
