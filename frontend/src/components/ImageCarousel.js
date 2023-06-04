// import {ImageList, ImageListItem, useMediaQuery, useTheme} from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";
// import Box from "@mui/material/Box";
// import React from "react";
// import { Typography } from '@mui/material';
//
// export function ImageSlide(props) {
//     const theme = useTheme()
//
//     const md = useMediaQuery(theme.breakpoints.up("md"))
//     return (<Box>
//         <img
//             style={{
//                 height: (md ? "300px" : "200px"),
//             }}
//             src={props.src}
//         />
//     </Box>)
// }
//
// export default function ImageCarousel(props) {
//     const theme = useTheme()
//     const md = useMediaQuery(theme.breakpoints.up("md"))
//
//     const height = `${((md ? 300 : 200) * 2) + (parseInt(theme.spacing(2), 10))}px`
//     const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
//     console.log(`SMALL: ${isSmall}`)
//     return (
//         <Box>
//             {isSmall ? <span/> : <Grid
//                 container
//                 justifyContent="center"
//                 sx={{
//                     margin: "10vh 30px",
//                     height: height,
//                     overflowX: 'hidden',
//                     overflow: "hidden",
//                     gap: theme.spacing(2),
//                 }}>
//                 <Grid item
//                     sx={{
//                         margin: "auto 10vw",
//                     }}
//                 >
//                     <Typography variant={"h2"}>Unleash your</Typography>
//                     <Typography variant={"h2"}>inner Trailblazer</Typography>
//                 </Grid>
//
//                 {itemData.map((item, index) => (<Grid key={index} item>
//                     <ImageSlide src={item.img}/>
//                 </Grid>))}
//                 {/*</Grid>*/}
//             </Grid>}
//
//         </Box>
//
//     );
// }
//
// const itemData = [{
//     img: '/carousel/3cddd634c2def6e6f0f10969b703a66b--wyoming-usa-grand-teton-national-park.jpg', title: 'Bed',
// }, {
//     img: '/carousel/2017-moonlighthosmer-mikekristywestby-01.jpg', title: 'Kitchen',
// }, {
//     img: '/carousel/a9d4eda607c79d18064f9e172269f1ad--lake-ohara-canada-beautiful-park.jpg', title: 'Sink',
// }, {
//     img: '/carousel/download.jpg', title: 'Books',
// }, {
//     img: '/carousel/loch-eil-and-ben-nevis-royalty-free-image-1613726428_.jpg', title: 'Chairs',
// }, {
//     img: '/carousel/merlin_59275027.jpg', title: 'Candle',
// }, {
//     img: '/carousel/open-canoeing-on-lake-windermere.jpg', title: 'Laptop',
// }, {
//     img: '/carousel/The-Benefits-of-Exercising-Outdoors-Fitness-Nation-901x601.jpg', title: 'Doors',
// }, {
//     img: '/carousel/the-benefits-of-outdoor-exercise-722x406.jpg', title: 'Coffee',
// }, {
//     img: '/carousel/unnamed(1).png', title: 'Storage',
// }, {
//     img: '/carousel/unnamed.jpg', title: 'Coffee table',
// },];