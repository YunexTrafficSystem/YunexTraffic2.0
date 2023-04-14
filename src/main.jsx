import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from "./routes/AppRouter";
import { BrowserRouter } from 'react-router-dom';
import { theme } from './themes/basicColor';


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <AppRouter />
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
)