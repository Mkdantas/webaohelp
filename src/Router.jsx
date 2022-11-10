import React from 'react';
import Navbar from './components/Navbar'
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Create from './pages/Tickets/Create';
import Unassigned from './pages/Tickets/Unassigned';
import Open from './pages/Tickets/Open';
import Pending from './pages/Tickets/Pending';
import Closed from './pages/Tickets/Closed';


const Router = () => {
    const [theme, colorMode] = useMode();

    return (
        <BrowserRouter>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div id="app">
                        <Navbar />
                        <main id="content">
                            <Routes>
                                <Route path="/create" element={<Create />} />
                                <Route path="/unassigned" element={<Unassigned />} />
                                <Route path="/open" element={<Open />} />
                                <Route path="/pending" element={<Pending />} />
                                <Route path="/closed" element={<Closed />} />
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </BrowserRouter>

    )
};

export default Router;