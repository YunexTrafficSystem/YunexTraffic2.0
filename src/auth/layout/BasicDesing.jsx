import React from 'react';
import { Avatar, Button, Grid, Box, Typography, Toolbar, AppBar, IconButton, ButtonGroup, CssBaseline, Container, MenuItem, Menu, ThemeProvider } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../themes/basicColor';
import { AccountCircleOutlined } from '@mui/icons-material';



const useStyles = makeStyles(theme => ({
    main: {        backgroundColor: '#e2edf3',
    },
    card: {
        backgroundColor: '#fff',
    },
    green: {
        backgroundColor: '#abb8c3'
    }
}));


export const BasicDesing = ({ children, tittle = '' }) => {

    const classes = useStyles();



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
                {/* Nabvar */}
                <AppBar position='static'>
                    <Box backgroundColor='white'>
                        <Toolbar
                            size="large"
                            edge='start'
                            aria-label='menú'
                            sx={{ mr: 2 }}
                        >
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
                                <MenuItem onClick={handleClose}><Button variant="text" href="/">
                                    Inicio
                                </Button></MenuItem>

                                <MenuItem onClick={handleClose}><Button variant="text" href="SignUp">
                                    Registrarse
                                </Button></MenuItem>

                                <MenuItem onClick={handleClose}><Button variant="text" href="Login">
                                    Iniciar Sesión
                                </Button></MenuItem>
                            </Menu>

                            <Grid sx={{ m: 4, flexGrow: 1 }}>
                                <img src='./img/logoYunex.png' alt='' width='100px' height='40px' />
                            </Grid>
                            <Grid justifyContent='space-between'>
                                <Grid container direction='row' justifycontent='end' >
                                    <ButtonGroup variant="contained" aria-label="contained primary button group" >
                                        <Button href="Home" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>INICIO</Button>
                                        <Button href="Register" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>REGISTRARSE</Button>
                                        <Button href="Login" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>INICIAR SESIÓN</Button>
                                    </ButtonGroup>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </Box>
                </AppBar>
                {/* Fin del nabvar */}

                {/* Body */}
                {/**Color fondo*/}
                <Grid className={classes.main} padding='4%'>

                    <Grid container  >
                        {/**Card que contiene el formulario*/}
                        <Box backgroundColor='white' paddingTop='3%' width='50%' margin='auto' boxShadow='0px 3px 3px black' color='inherit' sx={{ display: 'flex', justifyContent: 'space-between'}}>

                            {/**Ícono y titulo*/}
                            <Grid item xs={12} sm={12} >
                                <Avatar sx={{ bgcolor:'primary.main', margin: 'auto'}}>
                                    <AccountCircleOutlined color='black'/>
                                </Avatar>
                                <Typography component='h1' variant='h5' align='center' marginBottom={3} marginTop={4}>
                                    {tittle}
                                </Typography>

                                {children}

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                {/* Fin del body */}


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
    )
}