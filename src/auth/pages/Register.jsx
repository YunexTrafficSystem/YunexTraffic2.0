import React from 'react'
import { Button,  Box,  Grid,  TextField, Select,  FormControl,  MenuItem,  InputLabel,Link, Checkbox, FormControlLabel}from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { BasicDesing } from '../layout/BasicDesing'


const useStyles = makeStyles(theme => ({
  main: {
      backgroundColor: '#e2edf3',
  },
  card: {
      backgroundColor: '#fff',
  },
  }
));

export const Register = () => {

  const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const classes = useStyles();

  return (
    <BasicDesing tittle='REGISTRO'>
      <form>
        <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, }}>

          <Grid container  >
            <Grid item xs={12} sm={5.8} sx={{ mr: 1.4}}>
              <TextField
                type='text'
                id='fullName'
                label='Nombre Completo'
                margin='dense'
                fullWidth
                required
                {...register('name', { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={5.9}>
              <FormControl required fullWidth margin="dense" >
                <InputLabel>Rol solicitado</InputLabel>
                <Select
                  label='Rol solicitado'
                  required
                  {...register('rol')}
                >
                  <MenuItem value={1}>Administrador</MenuItem>
                  <MenuItem value={2}>Jefe Laboratorio</MenuItem>
                  <MenuItem value={2}>Jefe Ensamble</MenuItem>
                  <MenuItem value={2}>Jefe Garantías</MenuItem>
                  <MenuItem value={2}>Jefe Mantenimiento</MenuItem>
                  <MenuItem value={2}>Jefe EHS</MenuItem>
                </Select>
              </FormControl >
            </Grid>

            <Grid item xs={12} sm={12} sx={{ mt: 1}}>
              <TextField
                type='email'
                id='email'
                label='Correo Electrónico'
                required
                fullWidth
                {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
              />
            </Grid>
            <Grid item xs={12} sm={12} sx={{ mt: 1}}>
              <TextField
                type='password'
                id='password'
                label='Contraseña'
                required
                margin='dense'
                fullWidth
                {...register('password', { required: true, minLength: 8, maxLength: 20 })}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    color='primary'
                    {...register("terms", { required: true })}
                  />
                }
                label='Acepto terminos y condiciones'
              />
            </Grid>
            <Grid
              container
              justifyContent='center'
            >
              <Grid
                item
              >
                <Button
                  backgroundColor='primary.main'
                  type='submit'
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  ENVIAR
                </Button>
              </Grid>
            </Grid>
            <Grid>
              {/**Link para redireccionar al formulario del Login*/}
              <Link to='/Login' variant='body2' underline='none' component={RouterLink}>
                Ya tengo cuenta
              </Link>
            </Grid>
          </Grid>
        </Box>
      </form>
    </BasicDesing>
  )
}
