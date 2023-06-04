import * as React from 'react';
import Box from '@mui/material/Box';

import PrettyLink from "./PrettyLink"
import Stack from '@mui/material/Stack';


function Header() {

    const REACT_APP_CLIENT_ID  = 108420;
    const redirectUrl = "http://localhost:3000/traildata";
    const scope = "read"

    const handleLogin = () => {
        window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=${scope}`;
    };


    return (
        <Box sx={{flexGrow: 1}}>
            <Stack direction="row" sx={{margin: "10px", borderBottom: "1px solid grey"}}>
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