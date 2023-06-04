import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Landing from "./routes/Landing";
import TrailData from './routes/TrailData';
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline, useMediaQuery} from "@mui/material";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import light from "./theme/light";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>
    },
    {
        path: "/traildata",
        element: <TrailData/>
    }
])


const SetThemeContext = React.createContext((theme) => {
})

root.render(
    <RootApp/>
);

function RootApp(props) {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [theme, setTheme] = useState(light); // TODO, dark theme?
    return (
        <div>
            <SetThemeContext.Provider value={(thisTheme) => {setTheme(thisTheme)}}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <RouterProvider router={router}/>
                </ThemeProvider>
            </SetThemeContext.Provider>

        </div>
    )
}

