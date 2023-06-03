import { TextField } from "@mui/material";
import { useState } from "react";
import { json, useParams } from "react-router";
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';


export default function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const REACT_APP_CLIENT_ID  = 108420;
    const redirectUrl = "http://localhost:3000/hello";
    const scope = "read"

    const handleLogin = () => {
        window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=${scope}`;
    };

    async function fetchData(data)
    {
        let json = JSON.stringify(data);
        let response = await fetch("http://chrissytopher.com:5000/trails", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: json,
        });
        console.log(await response.text());
    }

    async function login()
    {
        console.log("Sending data: " + JSON.stringify({username: username, password: password}));
        await fetchData({username: username, password: password});
    }

    return (
        <div>
            <TextField id="standard-basic" variant="standard" label="Username" onChange={(e) => setUsername(e.target.value)}/>
            <br></br>
            <TextField id="standard-basic" variant="standard" label="Password" onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <br></br>
            <button onClick={() => handleLogin()}>Fetch Test</button>
        </div>
    )
}