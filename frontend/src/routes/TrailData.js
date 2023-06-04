import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import HeaderTrailData from "../components/HeaderTrailData.js"
import { Map, Marker } from "pigeon-maps"
import React from "react";

export default class TrailData extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        console.log("mounting");
        console.log(await getData(1, 47.6062, -122.3321));
        //this.setState({...this.state, data: getData(1, 47.6062, -122.3321)})
    }

    render() {
        const queryParameters = new URLSearchParams(window.location.search);
        const code = queryParameters.get("code");
        console.log(code);


        //fetchData({user_code: code});

        const testTrailData = [{
            "id": 229781,
            "resource_state": 3,
            "name": "Hawk Hill",
            "activity_type": "Ride",
            "distance": 2684.82,
            "average_grade": 5.7,
            "maximum_grade": 14.2,
            "elevation_high": 245.3,
            "elevation_low": 92.4,
            "start_latlng": [37.8331119, -122.4834356],
            "end_latlng": [37.8280722, -122.4981393],
            "climb_category": 1,
            "city": "San Francisco",
            "state": "CA",
            "country": "United States",
            "private": false,
            "hazardous": false,
            "starred": false,
            "created_at": "2009-09-21T20:29:41Z",
            "updated_at": "2018-02-15T09:04:18Z",
            "total_elevation_gain": 155.733,
            "map": {
                "id": "s229781",
                "polyline": "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
                "resource_state": 3
            },
            "effort_count": 309974,
            "athlete_count": 30623,
            "star_count": 2428,
            "athlete_segment_stats": {
                "pr_elapsed_time": 553,
                "pr_date": "1993-04-03",
                "effort_count": 2
            }
        }];

        return (
            <div>
                <HeaderTrailData></HeaderTrailData>
                <h1>
                    Hikes For You
                </h1>
                {testTrailData.map((item) => (
                    <Accordion>
                        <AccordionSummary>
                            <Typography>
                                {item.name}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Distance: {item.distance}
                            </Typography>
                            <Typography>
                                Average Grade: {item.average_grade}
                            </Typography>
                            <a href={`https://maps.google.com/?q=${item.start_latlng[0]},${item.start_latlng[1]}`}>
                                Google Maps
                            </a>
                        </AccordionDetails>
                    </Accordion>
                ))}


            </div>
        )
    }
}

async function fetchData(data) {
    let json = JSON.stringify(data);
    let response = await fetch("http://chrissytopher.com:5000/athlete/activity", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: json,
    });
    console.log(await response.text());
}

async function getData(bounding_width, bounding_center_lat, bounding_center_long) {
    let response = await fetch(`http://chrissytopher.com:5000/get_relavant_segments?bounding_width=${bounding_width}&bounding_center_lat=${bounding_center_lat}&bounding_center_long=${bounding_center_long}&token=e8fe3d9de248c16768a85a2d7343664057742ba7`, { mode: 'no-cors' });
    return response.json()
}