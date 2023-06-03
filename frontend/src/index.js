import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Landing from "./routes/Landing";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline, useMediaQuery} from "@mui/material";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import light from "./theme/light";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/hello",
        element: <Landing/>
    }
])

const SetThemeContext = React.createContext((theme) => {
})

root.render(
    <React.StrictMode>
        <RootApp/>
    </React.StrictMode>
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

