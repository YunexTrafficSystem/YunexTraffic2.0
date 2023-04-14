import React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { theme } from "../../themes/basicColor";
import { Footer } from "./Footer";

const drawerWidth = 240;

export const Base = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>

      <Box sx={{ display: 'flex' }}>

        <NavBar />

        <SideBar />

        <Box component='main' sx={{ flexGrow: 1, p: 3  }}>

          {/* Toolbar */}

          {children}

        </Box>

        <Footer/>
      </Box>
    </ThemeProvider>
  )
}