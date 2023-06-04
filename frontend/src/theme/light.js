import baseline from "./baseline";
import {createTheme} from "@mui/material/styles";
import {deepmerge} from "@mui/utils";

const theme = createTheme(deepmerge(baseline, {
    palette: {
        mode: 'light',
        primary: {
            main: '#FCF5F4',
            header: "rgb(255,255,255)",
        },
        footer: {
            main: "rgb(59,59,59)",
            text: "rgb(255,255,255)",
        },
        text: {
            primary: "rgba(0,0,0,0.8)",
            hover: "rgba(137,137,137,0.9)",
            borderHover: "rgba(252,82,0,255)"
        },
    }
}))
export default theme

