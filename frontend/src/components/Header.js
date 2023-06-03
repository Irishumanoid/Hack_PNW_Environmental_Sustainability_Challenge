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
import {makeStyles} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';


function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Stack direction="row" sx={{margin: "10px"}}>
                <Box sx={{margin: "auto 40vw auto 5vw"}}>
                    <h1>
                        Trail Trecker
                    </h1>
                </Box>
                <Box sx={{margin: "auto 0 auto 0", display: "flex", }}>
                    <PrettyLink sx={{
                        padding: "10px",
                        fontWeight: "bold"
                    }}>Login with
                        <img style={{display: "inline"}} src={"https://d3nn82uaxijpm6.cloudfront.net/assets/website_v2/svgs/strava-orange-c33577e7257d5ac4a2e972564c5c7556037f3d005c5b5cb2f0e0d06ac7b84c47.svg"}/>
                    </PrettyLink>
                </Box>
            </Stack>
        </Box>
    );
}

export default Header