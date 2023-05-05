import React from "react";
import { AppBar, Button, Grid, Box, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { ExitToAppOutlined, PersonSharp } from "@mui/icons-material";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { theme } from "../../themes/basicColor";
import { makeStyles} from '@mui/styles';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    main: {
      backgroundColor: '#e2edf3',
    },
    card: {
      backgroundColor: '#ffffff',
    },
    green: {
      backgroundColor: '#3EEB92'
    },
  
  }));


export const NavBar = ({ drawerWidth = 240 }) => {

    const classes = useStyles();

    const [open, setOpen] = useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const abierto = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [open1, setOpen1] = useState(false);

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    return (
        < ThemeProvider theme={theme}>
            <AppBar
            position="fixed"
            sx={{ color:'p',ml: { md: `${ drawerWidth }px`}, zIndex: 1}} >
                <Box backgroundColor='#e2edf3'>
                <Toolbar >
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='abierto drawer'
                        onClick={toggleDrawer}
                        sx={{
                            mr: 4, display: { md:'none', sm:'flex' }
                        }}>
                    </IconButton>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Grid sx={{ m: 4, flexGrow: 1, width:'5%'}}>
                            <img src='../img/logoYunex.png' alt='' width='90px' height='40px' />
                        </Grid>
                        <Grid sx={{width:{lg:'80%', md:'70%', sm:'60%', xs:'50%'}}} width='70%' height='40px'textAlign={'left'}>
                            <Typography>Juan Pablo Gómez</Typography>
                        </Grid>
                        <Grid item  >
                            <PersonSharp onClick={handleClick} sx={{ mr: 3, color: "primary.main" }} fontSize="large" />
                            <ExitToAppOutlined sx={{ mr: 5, color: "primary.main" }} fontSize="large" />
                            <Menu
                                anchorEl={anchorEl}
                                open={abierto}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Button variant="contained" href="/">
                                        Inicio
                                    </Button>
                                </MenuItem>

                                <MenuItem onClick={handleClose}>
                                    <Button variant="contained" onClick={handleClickOpen1}>
                                        Editar Perfil
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Grid>
                    </Grid>
                </Toolbar>
                </Box>
            </AppBar>
        </ThemeProvider >
    )
} 
