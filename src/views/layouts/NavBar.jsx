import React from "react";
import { AppBar, Button, Grid, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
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
            sx={{ color:'p', ml: { sm: `${ drawerWidth }px`}, zIndex: 1}} >
                <Toolbar>
                    <IconButton
                        edge='start'
                        color='inherit'
                        aria-label='abierto drawer'
                        onClick={toggleDrawer}
                        sx={{
                            mr: 4, display: { sm: 'none' }
                        }}>
                    </IconButton>
                    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                        <Grid sx={{ m: 5, flexGrow: 1 }}>
                            <img src='../img/logoYunex.png' alt='' width='100px' height='40px' />
                        </Grid>
                        <Grid>
                            <PersonSharp onClick={handleClick} sx={{ mr: 3, color: "primary.main" }} fontSize="large" />
                            <ExitToAppOutlined sx={{ mr: 25, color: "primary.main" }} fontSize="large" />
                        </Grid>
                        <Menu
                            anchorEl={anchorEl}
                            open={abierto}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>
                                <Button variant="text" href="/">
                                    Inicio
                                </Button>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                                <Button variant="text" onClick={handleClickOpen1}>
                                    Editar Perfil
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Toolbar>
            </AppBar>
        </ThemeProvider >
    )
} 
