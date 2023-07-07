import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography, IconButton, ButtonGroup, Box, CssBaseline, 
  Container, ThemeProvider, Menu, MenuItem, AppBar, Toolbar } from '@mui/material';
import { theme } from '../../themes/basicColor';


const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "#E2EDF3"
  },
  card: {
    backgroundColor: '#fff'
  }
}))

export const Home = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);image.png
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        {/**Nabvar */}
        <AppBar position='static' justifycontent='space-between' alingitems='center'>
          <Grid className={classes.main}>
            <Toolbar>
              <IconButton
                sx={{ m: 10, display: { md: 'none' } }}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}><Button variant="text" href="SignUp">
                  Registrarse
                </Button></MenuItem>

                <MenuItem onClick={handleClose}><Button variant="text" href="Login">
                  Iniciar Sesión
                </Button></MenuItem>
              </Menu>

              <Grid component="div" sx={{ m: 5, flexGrow: 1 }}>
                <img src='./img/logoYunex.png' alt='' width='100px' height='40px' />
              </Grid>
              <Grid>
                <Grid container direction='row' justifycontent='end'>
                  <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" >
                    <Button href="Register" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>REGISTRARSE</Button>
                    <Button href="Login" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>INICIAR SESIÓN</Button>
                  </ButtonGroup>
                </Grid>
              </Grid>
            </Toolbar>
          </Grid>
        </AppBar>
        {/**Fin nabvar */}

        {/* Body */}
        {/**Fondo*/}
        <Grid margin='7%' >

          {/**Contenedor de la imagen y el texto*/}
          <Grid container spacing={2} padding="1%">
            {/**Configuración del texto según el tamaño de la pantalla*/}
            <Grid item xs={12} sm={12} md={6} padding="2%">
              {/* Texto del body */}
              <Typography component='h1' variant='h3' align='center' color='text.ligthgreen' gutterBottom >
                The Yunex Traffic System
              </Typography>
              <Typography variant='p' align='center' color='text.secondary' component='p'>
                Software desarrollado con el objetivo de optimizar y facilitar los procesos de las áreas de trabajo que componen la empresa Yunex Traffic.
              </Typography>
              <Grid
                container
                justifyContent='center'
              >
                <Grid
                  item
                >
                  {/**Redireccionamiento al login*/}
                  <Button
                    variant='contained'
                    sx={{ marginTop: 5 }}
                    href='Login'
                  >
                    Iniciar ahora
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/**Imagen del body*/}
            <Grid item sm={12} xs={12} md={6} align="center">
              <img src='../img/yunex.jpg' alt='' width='450px' height='250' />
            </Grid>
          </Grid>
        </Grid >

        {/* Footer */}
        <Box sx={{ backgroundColor: 'black' }}>
          <CssBaseline />
          <Container >
            <Grid container padding='3%' >

              <Grid item sm={3} xs={12}>
                <Typography variant='body2' align='center' color='white'>
                  Compliace
                </Typography>
              </Grid>
              <Grid item sm={3} xs={12}>
                <Typography variant='body2' align='center' color='white'>
                  For Suppliers
                </Typography>
              </Grid>

              <Grid item sm={3} xs={12}>
                <Typography variant='body2' align='center' color='white'>
                  Data Privacy & Cookies
                </Typography>
              </Grid>

              <Grid item sm={3} xs={12}>
                <Typography variant='body2' align='center' color='white'>
                  Impripmit
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* Fin del footer */}
      </ThemeProvider>
    </>
  )
}
