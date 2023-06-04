import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import PrettyLink from "./PrettyLink"
import Stack from '@mui/material/Stack';
import {makeStyles, useTheme} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';


function Header(props) {
    const theme = useTheme()

    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: theme.palette.primary.header
        }}>
            <Stack direction="row" sx={{margin: "10px"}}>
                <Box sx={{margin: "auto auto auto 5vw"}}>
                    <h2>
                        Trail Trekker
                    </h2>
                </Box>
                <Box sx={{margin: "auto 5vw auto 0", display: "flex",}}>
                    {props.children}
                </Box>
            </Stack>
        </Box>
    );
}

export default Header