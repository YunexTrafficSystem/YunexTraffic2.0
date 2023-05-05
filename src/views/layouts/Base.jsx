import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { theme } from "../../themes/basicColor";
import { Footer } from "./Footer";

const drawerWidth = 240;
const drawerWidthbottom = 50;

export const Base = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ display: 'flex',position:'absolute', with:'100%', minHeight:'100%',mt:'11%'}} margin={-1} >

        <NavBar />

        <SideBar />

        <Box component='main' sx={{ flexGrow: 1, p: 3, pt:{ md:3, sm:9, xs:13}, pb:12}}  marginBottom={'12%'} marginRight={7} >

          {/* Toolbar */}

          {children}

        </Box>
        <Footer/>
      </Box>
    </ThemeProvider>
  )
}