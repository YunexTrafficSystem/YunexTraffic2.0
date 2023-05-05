import React from 'react'
import { useState } from 'react';
import { Assignment, ContentPaste, ExpandLess, ExpandMore, Handyman, UploadFileOutlined, WorkRounded } from '@mui/icons-material';
import { Drawer, Box, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Collapse } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../themes/basicColor';

const drawerWidth = 240;


export const SideBar = () => {

    const [Men, setMen] = useState(false)
    const handleMen = () => {
        const NewOpen = !Men
        setMen(NewOpen)
    }
    const [lab, setLab] = useState(false)
    const handleLab = () => {
        const NewOpen = !lab
        setLab(NewOpen)
    }
    const [ehs, setEhs] = useState(false)
    const handleEhs = () => {
        const NewOpen = !ehs
        setEhs(NewOpen)
    }
    const [ens, setEns] = useState(false)
    const handleEns = () => {
        const NewOpen = !ens
        setEns(NewOpen)
    }


    return (
        <ThemeProvider theme={theme}>
            <Drawer
                color='primary.main'
                variant="permanent"
                sx={{
                    zIndex: 0,
                    flexDirection: 'column',
                    postion: 'absolute',
                    width: drawerWidth,
                    flexShrink: 0,
                    display: { xs:'none', md:'flex' },
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, paddingBottom:'10%', boxSizing: 'border-box', backgroundColor: 'primary.main' },
                }}
            >
                <Toolbar sx={{ marginTop: 8 }} />
                <Box sx={{ backgroundColor: '#3eeb92'}}>

                <ListItemButton onClick={handleMen}>
                    <ListItemText primary="Menu" align="center" onClick={() => { props.onClick(1); }} />
                    {Men ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={Men} timeout="auto" unmountOnExit>
                    <ListItemButton onClick={handleLab}>
                        <ListItemIcon>
                            <ContentPaste />
                        </ListItemIcon>
                        <ListItemText primary="Laboratorio" onClick={() => { props.onClick(2); }} />
                        {lab ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={lab} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => { props.onClick(3); }}>
                                <ListItemText primary="Balance" align="center" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={handleEns}>
                        <ListItemIcon>
                            <Handyman />
                        </ListItemIcon>
                        <ListItemText primary="Ensambles" onClick={() => { props.onClick(4) }} />
                        {ens ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={ens} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => { props.onClick(5); }}>
                                <ListItemText primary="Balance" align="center" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={() => { props.onClick(6); }}>
                        <ListItemIcon>
                            <WorkRounded />
                        </ListItemIcon>
                        <ListItemText primary="Mantenimiento" />
                    </ListItemButton>

                    <ListItemButton onClick={() => { props.onClick(7); }}>
                        <ListItemIcon>
                            <UploadFileOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Garantias" />
                    </ListItemButton>

                    <ListItemButton onClick={handleEhs}>
                        <ListItemIcon>
                            <Assignment />
                        </ListItemIcon>
                        <ListItemText primary="EHS" />
                        {ehs ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={ehs} timeout="auto" unmountOnExit >
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => { props.onClick(8); }}>
                                <ListItemText primary="Datos Personales" align="center" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }} onClick={() => { props.onClick(9); }}>
                                <ListItemText primary="Preoperacionales" align="center" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }} onClick={() => { props.onClick(10); }}>
                                <ListItemText primary="Preventivos" align="center" />
                            </ListItemButton>

                            <ListItemButton sx={{ pl: 4 }} onClick={() => { props.onClick(11); }}>
                                <ListItemText primary="Inventario" align="center" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    </Collapse>
                </Box>
            </Drawer>
        </ThemeProvider>
    )
}
