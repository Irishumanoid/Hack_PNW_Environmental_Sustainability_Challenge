export default  async function fetchUserInfo(token) {
    let response = await fetch(`http://chrissytopher.com:5000/athlete?token=${token}`);
    let json = (await response.text()).substring(2);
    return JSON.parse(json);
}