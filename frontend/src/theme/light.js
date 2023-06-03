import baseline from "./baseline";
import {createTheme} from "@mui/material/styles";
import {deepmerge} from "@mui/utils";

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff',
        },

        text: {
            primary: "rgba(0,0,0,0.8)",
            hover: "rgba(69,224,204,0.9)"
        },
    }
})
export default theme

