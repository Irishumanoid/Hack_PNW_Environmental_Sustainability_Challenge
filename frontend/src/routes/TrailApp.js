import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Paper, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import {useTheme} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import * as React from 'react';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Stack from "@mui/material/Stack";
import fetchTrailData from "../utils/fetchTrailData";
import PrettyLink from "../components/PrettyLink"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import fetchUserInfo from "../utils/fetchUserInfo";
import SpeedIcon from '@mui/icons-material/Speed';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({theme}) => ({}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{fontSize: '0.9rem'}}/>}
        {...props}
    />
))(({theme}) => ({
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',

    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(2),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({theme}) => ({}));

export default function TrailApp() {
    const [isExpanded, setIsExpanded] = useState(0);
    const [trailData, setTrailData] = useState([]);
    const [athleteData, setAthleteData] = useState({});

    const [userLat, setUserLat] = useState(undefined);
    const [userLong, setUserLong] = useState(undefined);

    const handleChange = (panel) => (event, newExpanded) => {
        setIsExpanded(newExpanded ? panel : 0);
    }

    const theme = useTheme()

    useEffect(() => {
        if (userLat && userLong)
        {
            fetchTrailData(1, userLat, userLong, "8bd45d30c1c9e802f7f81a76d24245747dc474eb").then((it) => {
                console.log(it)
                setTrailData(it)
            })
        }


    }, [userLat, userLong])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setUserLat(position.coords.latitude);
            setUserLong(position.coords.longitude);
        });
        fetchUserInfo("8bd45d30c1c9e802f7f81a76d24245747dc474eb").then((it) => {
            setAthleteData(it)
        })

    }, [])

    const getAthleteLocation = (data) => {
        const city = data.city
        const state = data.state

        if (!city && !state) {
            return "Location unknown"
        } else if (!city && state) {
            return state
        } else if (city && !state) {
            return city
        } else {
            return `${city}, ${state}`
        }
    }

    const getAthleteScore = (data) => {
        if (data.score) {
            return data.score
        } else {
            return 0
        }
    }

    return <Box>
        <Header></Header>
        <Paper elevation={3} sx={{
            margin: "5vw",
            padding: "25px"
        }}>
            <Typography variant={"h1"} sx={{fontWeight: "bold"}}>
                {athleteData.first_name} {athleteData.last_name}
            </Typography>
            <Stack direction="row"
                   alignItems="center"
            >
                <AlternateEmailIcon/>
                <Typography variant={"h6"} sx={{ fontStyle: "italic",}}>{athleteData.username}</Typography>
            </Stack>
            <Stack direction="row"
                   alignItems="center"
            >
                <LocationOnIcon/>
                <Typography variant={"h6"}>{
                    getAthleteLocation(athleteData)
                }</Typography>
            </Stack>
            <Stack direction="row"
                   alignItems="center"
            >
                <SpeedIcon />
                <Typography variant={"h6"}>Fitness: {getAthleteScore(athleteData)}</Typography>
            </Stack>
        </Paper>
        <div style={{margin: "5vw"}}>
            <Typography variant={"h3"} sx={{margin: "20px 0px"}}>
                Your Activities
            </Typography>
            {
                trailData.map((it, index) =>
                    <ActivityItem expanded={isExpanded === index + 1} onChange={handleChange(index + 1)} data={it}
                                  key={index}/>
                )
            }
        </div>
        <Footer/>
    </Box>

}

export function ActivityItem({expanded, onChange, data, props}) {
    const theme = useTheme()

    const getGoogleMapsLink = (start) => {
        const link = `https://maps.google.com/?q=${start[0]},${start[1]}`
        return <PrettyLink to={link}>
            Open in maps
        </PrettyLink>
    }

    return (
        <Accordion expanded={expanded} onChange={onChange} disableGutters elevation={0} square {...props}>
            <AccordionSummary id="panel2d-header">
                <Typography variant="h5">{data.name}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{marginLeft: "30px"}}>
                <Stack direction="row" spacing={3} sx={{
                    margin: "0"
                }}>
                    <Stack direction="row"
                           justifyContent="center"
                           alignItems="center"
                    >
                        <SpeedIcon sx={{margin: "0 10px"}}/>
                        <Typography variant={"h5"}>Difficult: {data.difficulty}</Typography>
                    </Stack>
                    <Stack direction="row">
                        <LocationOnIcon sx={{margin: "0 10px"}}/>
                        <Typography variant={"h5"}>{getGoogleMapsLink(data.start_location)}</Typography>
                    </Stack>
                </Stack>

                <Stack direction="row" spacing={1} sx={{
                    fontStyle: "italic",
                    color: theme.palette.text.secondary,
                    margin: "10px 0"
                }}>
                    <Stack direction="row">
                        <HikingIcon sx={{margin: "0 10px"}}/>
                        <Typography variant={"body2"}>{data.distance} M</Typography>
                    </Stack>
                    <Stack direction="row">
                        <LandscapeIcon sx={{margin: "0 10px"}}/>
                        <Typography variant={"body2"}>{data.elevation} M</Typography>
                    </Stack>
                </Stack>

            </AccordionDetails>
        </Accordion>
    )
}
