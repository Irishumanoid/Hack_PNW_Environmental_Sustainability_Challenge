import { TextField } from "@mui/material";
import { useState } from "react";
import { json } from "react-router";
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';


export default function Login(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const onSuccess = response => console.log(response);
    const onFailure = response => console.error(response);

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
            <OAuth2Login
            authorizationUrl="https://www.strava.com/oauth/authorize"
            responseType="code"
            clientId="108420"
            redirectUri="http://localhost:3000/hello"
            onSuccess={onSuccess}
            onFailure={onFailure}/>
            <TextField id="standard-basic" variant="standard" label="Username" onChange={(e) => setUsername(e.target.value)}/>
            <br></br>
            <TextField id="standard-basic" variant="standard" label="Password" onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <br></br>
            <button onClick={() => login()}>Fetch Test</button>
        </div>
    )
}