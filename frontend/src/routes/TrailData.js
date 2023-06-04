import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import HeaderTrailData from "../components/HeaderTrailData.js"
import React from "react";
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default class TrailData extends React.Component {
    
    constructor() {
        super();
        this.state = {data: []};
    }

    async componentDidMount() {
        console.log("mounting");
        const MAP_TILE = L.tileLayer(
            `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`,
            {
              attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }
          );
        // Define an object literal with params that will be passed to the map:
        const mapParams = {
            center: L.latLng(37.0902, -95.7129),
            zoom: 5,
            zoomControl: false,
            maxBounds: L.latLngBounds(L.latLng(-150, -240), L.latLng(150, 240)),
            layers: [MAP_TILE],
        };
        const map = L.map('map', mapParams);
        const trailData2 = await getData(1, 47.6062, -122.3321);
        console.log(trailData2);
        this.setState({data: trailData2});
        //this.setState({...this.state, data: getData(1, 47.6062, -122.3321)})
    }

    render() {
        

        const queryParameters = new URLSearchParams(window.location.search);
        const code = queryParameters.get("code");
        if (code == null)
        {
            window.location = "/"
        }
        console.log(code);

        
          
          const mapStyles = {
            overflow: 'hidden',
            width: '100%',
            height: '100vh',
          };


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
        },
        {
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
        },
        {
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
        },
        {
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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
        },{
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

        

        
        console.log(this.state.data[0]);

        return (
            <div>
                <HeaderTrailData></HeaderTrailData>
                <h1>
                    Hikes For You
                </h1>
                <div style={{"display": "inline-block", float:"left", width:"40%", "marginRight":"10%", margin: "1%", overflow: "auto", height:"1000px"}}>
                    {this.state.data.map((item) => (
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
                                    Elevation: {item.elevation}
                                </Typography>
                                <a href={`https://maps.google.com/?q=${item.start_location[0]},${item.start_location[1]}`}>
                                    Google Maps
                                </a>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>

                <div style={{display: "inline-block", width: "50%", height: "600px", margin: "1%", overflow:"hidden", position:"sticky", marginBottom:"5%", top:"10px"}}>
                    <React.Fragment>
                        <div id="map" style={mapStyles} />
                    </React.Fragment>
                </div>
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
    let response = await fetch(`http://chrissytopher.com:5000/get_relavant_segments?bounding_width=${bounding_width}&bounding_center_lat=${bounding_center_lat}&bounding_center_long=${bounding_center_long}&token=8bd45d30c1c9e802f7f81a76d24245747dc474eb`);
    let json = (await response.text()).substring(2);
    //console.log(json);
    return JSON.parse(json);
}