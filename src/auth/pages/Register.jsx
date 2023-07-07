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
          <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1, padding:'6%', alignItems:'center' }}>

            <Grid container  >
              <Grid item lg={5.7} md={12} sm={12} sx={{ mr: 3,}}>
                <TextField
                  type='text'
                  id='fullName'
                  label='Nombre Completo'
                  sx={{boxShadow:1}}
                  margin='dense'
                  fullWidth
                  required
                  {...register('name', { required: true })}
                />
              </Grid>
              <Grid item lg={5.7} md={11.5} sm={11.5} >
                <FormControl required fullWidth margin="dense" >
                  <InputLabel>Rol solicitado</InputLabel>
                  <Select
                    label='Rol solicitado'
                    sx={{boxShadow:1}}
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

              <Grid item xs={12} sm={11.8} sx={{ mt: 1}}>
                <TextField
                  type='email'
                  id='email'
                  label='Correo Electrónico'
                  sx={{boxShadow:1, marginTop:'2%'}}
                  required
                  fullWidth
                  {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                />
              </Grid>
              <Grid item xs={12} sm={11.8} sx={{ mt: 1}}>
                <TextField
                  type='password'
                  id='password'
                  label='Contraseña'
                  sx={{boxShadow:1, marginTop:'2%'}}
                  required
                  margin='dense'
                  fullWidth
                  {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                />
              </Grid>
              <Grid item xs={12} sm={12}marginLeft={2}>
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
              <Grid container justifyContent='right'  >
                {/**Link para redireccionar al formulario del Login*/}
                <Link to='/Login' variant='body2' underline='none' component={RouterLink}  >
                  Ya tengo cuenta
                </Link>
              </Grid>
            </Grid>
          </Box>
        </form>
    </BasicDesing>
  )
}
