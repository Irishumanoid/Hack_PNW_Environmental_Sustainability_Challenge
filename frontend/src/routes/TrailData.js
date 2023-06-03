


export default function TrailData(props) {
    const queryParameters = new URLSearchParams(window.location.search);
    const code = queryParameters.get("code");
    console.log(code);
    fetchData({user_code: code});

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

    return (
        <div>
            <h1>
                Hello!
            </h1>
        </div>
    )
}