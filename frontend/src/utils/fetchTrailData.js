export default async function fetchTrailData(bounding_width, bounding_center_lat, bounding_center_long, token) {
    let response = await fetch(`http://chrissytopher.com:5000/get_relavant_segments?bounding_width=${bounding_width}&bounding_center_lat=${bounding_center_lat}&bounding_center_long=${bounding_center_long}&token=${token}`);
    let json = (await response.text()).substring(2);
    //console.log(json);
    return JSON.parse(json);
}