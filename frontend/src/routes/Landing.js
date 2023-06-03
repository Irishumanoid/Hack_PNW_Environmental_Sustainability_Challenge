

export default function Landing(props) {
    const queryParameters = new URLSearchParams(window.location.search);
    const code = queryParameters.get("code");
    console.log(code);

    return (
        <div>
            <h1>
                Hello!
            </h1>
        </div>
    )
}