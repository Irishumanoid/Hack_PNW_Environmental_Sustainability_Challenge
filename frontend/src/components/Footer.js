import Box from "@mui/material/Box";
import {Divider, useMediaQuery, useTheme} from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer(props) {
    const theme = useTheme()

    return (<Box sx={{
        width: "100vw",
        padding: "30px",
        margin: "10vh 0 0 0",
        backgroundColor: theme.palette.footer.main,
        color: theme.palette.footer.text
    }}>
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={2} >
            <Typography sx={{margin: "0 5px"}}>2023 PNW Hackathon. Developed by:</Typography>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}
            >
                <span>Iris Litiu</span>
                <span>Ben Jaynes</span>
                <span>Jonas Moore</span>
                <span>Christopher Huntwork</span>
                <span>Durgan McBroom</span>
            </Stack>
        </Stack>
    </Box>)
}