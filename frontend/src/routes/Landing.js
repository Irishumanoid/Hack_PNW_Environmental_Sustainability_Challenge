

export default function Landing(props) {
    const REACT_APP_CLIENT_ID  = 108420;
    const redirectUrl = "http://localhost:3000/traildata";
    const scope = "read"

    const handleLogin = () => {
        window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=${scope}`;
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}