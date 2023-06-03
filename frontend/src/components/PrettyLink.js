import {Link} from "react-router-dom";
import {useTheme} from "@mui/material";
import {useState} from "react";
import {deepmerge} from "@mui/utils";

export default function PrettyLink(props) {
    const theme = useTheme()

    const [hover, setHover] = useState(false)

    // const txtColor = hover ? theme.palette.text.hover : ;

    const style = deepmerge(props.sx == null ? {} : props.sx, {
        textDecorationLine: "none",
        color: theme.palette.text.primary,
        // borderBottom: hover ? "3px solid " + theme.palette.text.borderHover : "none"
    })

    return <div style={{
        borderBottom: hover ? "3px solid " + theme.palette.text.borderHover : "none"

    }}> <Link
        to={props.to}
        style={style}
        onMouseEnter={() => {
            setHover(true)
        }}
        onMouseLeave={() => {
            setHover(false)
        }}
    >
        {props.children}
    </Link> </div>
}