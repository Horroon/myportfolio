import React from 'react';
import { Link } from 'react-router-dom'

interface buttonFace {
    link: string,
    text: string
}

const buttons: Array<buttonFace> = [{ link: "/", text: "Home" }, { link: "/myprofile", text: "Profile" }, { link: "/services", text: "Services" }]; //{ link: "/services", text: "Services" }

export const Button:React.FC<buttonFace> = ({link, text}): JSX.Element => (<Link to={link} className="rmw-dflt-lnk-prpty"><button type="button" className="btn btn-secondary btn-sctm-style">{text}</button></Link>)

