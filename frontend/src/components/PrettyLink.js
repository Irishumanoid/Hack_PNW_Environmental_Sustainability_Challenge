import {Link} from "react-router-dom";
import {useTheme} from "@mui/material";
import {useState} from "react";
import {deepmerge} from "@mui/utils";

export default function PrettyLink(props) {
    const theme = useTheme()

    const [hover, setHover] = useState(false)

    const style = deepmerge(props.sx == null ? {} : props.sx, {
        textDecorationLine: "none",
        color: theme.palette.text.primary,
    })

    return <div style={{
        borderBottom: hover ? "3px solid " + theme.palette.text.borderHover : "none",
        transition: 'border-bottom 0.1s ease-in'
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