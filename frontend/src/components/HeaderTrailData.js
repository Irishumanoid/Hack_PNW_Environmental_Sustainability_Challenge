import * as React from 'react';
import Box from '@mui/material/Box';

import PrettyLink from "./PrettyLink"
import Stack from '@mui/material/Stack';


function HeaderTrailData() {

    const REACT_APP_CLIENT_ID  = 108420;
    const redirectUrl = "http://localhost:3000/traildata";
    const scope = "read"

    const handleLogin = () => {
        window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=${scope}`;
    };


    return (
        <Box sx={{flexGrow: 1, borderBottom: "1px solid grey"}}>
            <Stack direction="row" sx={{margin: "10px"}}>
                <Box sx={{margin: "auto 40vw auto 5vw"}}>
                    <h1>
                        Trail Trecker
                    </h1>
                </Box>
                
            </Stack>
        </Box>
    );
}

export default HeaderTrailData