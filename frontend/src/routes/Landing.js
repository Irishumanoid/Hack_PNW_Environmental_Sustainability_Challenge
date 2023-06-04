import Header from "../components/Header";
import Footer from "../components/Footer";
import PrettyLink from "../components/PrettyLink";
import * as React from "react";
import ImageCarousel from "../components/ImageCarousel";
import Typography from "@mui/material/Typography";
import {ImageList, ImageListItem, useMediaQuery, useTheme} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

export default function Landing(props) {

    const REACT_APP_CLIENT_ID = 108420;
    const redirectUrl = "http://localhost:3000/traildata";
    const scope = "read"

    const location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}&approval_prompt=force&scope=${scope}`

    return (
        <div>
            <Header children={
                <PrettyLink
                    to={location}
                    sx={{
                        padding: "10px",
                        fontWeight: "bold"
                    }}>Login with
                    <img alt={"Log in with Strava"} style={{display: "inline"}}
                         src={"https://d3nn82uaxijpm6.cloudfront.net/assets/website_v2/svgs/strava-orange-c33577e7257d5ac4a2e972564c5c7556037f3d005c5b5cb2f0e0d06ac7b84c47.svg"}/>
                </PrettyLink>
            }/>
            <LandingImageSection/>
            <Typography variant={"body2"}
                        sx={{margin: "0 10vw", fontSize: "20pt"}}>
                Unlock a world of outdoor possibilities with our innovative platform, Trail Trekkers. By leveraging
                Strava's exercise data, we curate custom recommendations for thrilling outdoor activities that match
                your fitness achievements, pushing you to new heights of adventure and fitness.
                Elevate your outdoor experiences with Trail Trekkers, where we harness the power of Strava's exercise
                data to suggest invigorating activities based on your unique fitness profile, ensuring every adventure
                is a perfect fit.
            </Typography>
            <Footer/>
        </div>
    )
}



export function LandingImageSlide(props) {
    const theme = useTheme()

    const md = useMediaQuery(theme.breakpoints.up("md"))
    return (<Box>
        <img
            style={{
                height: (md ? "300px" : "200px"),
            }}
            src={props.src}
        />
    </Box>)
}

export function LandingImageSection(props) {
    const theme = useTheme()
    const md = useMediaQuery(theme.breakpoints.up("md"))

    const height = `${((md ? 300 : 200) * 2) + (parseInt(theme.spacing(2), 10))}px`
    const isSmall = useMediaQuery(theme.breakpoints.down("md"))
    console.log(`SMALL: ${isSmall}`)
    return (
        <Box>
            {isSmall ? <span/> : <Grid
                container
                justifyContent="center"
                sx={{
                    margin: "10vh 30px",
                    height: height,
                    overflowX: 'hidden',
                    overflow: "hidden",
                    gap: theme.spacing(2),
                }}>
                <Grid item
                      sx={{
                          margin: "auto 10vw",
                      }}
                >
                    <Typography variant={"h2"}>Unleash your</Typography>
                    <Typography variant={"h2"}>inner Trailblazer</Typography>
                </Grid>

                {itemData.map((item, index) => (<Grid key={index} item>
                    <LandingImageSlide src={item.img}/>
                </Grid>))}
                {/*</Grid>*/}
            </Grid>}
        </Box>
    );
}

const itemData = [{
    img: '/carousel/3cddd634c2def6e6f0f10969b703a66b--wyoming-usa-grand-teton-national-park.jpg', title: 'Bed',
}, {
    img: '/carousel/2017-moonlighthosmer-mikekristywestby-01.jpg', title: 'Kitchen',
}, {
    img: '/carousel/a9d4eda607c79d18064f9e172269f1ad--lake-ohara-canada-beautiful-park.jpg', title: 'Sink',
}, {
    img: '/carousel/download.jpg', title: 'Books',
}, {
    img: '/carousel/loch-eil-and-ben-nevis-royalty-free-image-1613726428_.jpg', title: 'Chairs',
}, {
    img: '/carousel/merlin_59275027.jpg', title: 'Candle',
}, {
    img: '/carousel/open-canoeing-on-lake-windermere.jpg', title: 'Laptop',
}, {
    img: '/carousel/The-Benefits-of-Exercising-Outdoors-Fitness-Nation-901x601.jpg', title: 'Doors',
}, {
    img: '/carousel/the-benefits-of-outdoor-exercise-722x406.jpg', title: 'Coffee',
}, {
    img: '/carousel/unnamed(1).png', title: 'Storage',
}, {
    img: '/carousel/unnamed.jpg', title: 'Coffee table',
},];