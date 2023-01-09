import { Fade } from "@mui/material";
import React from "react";
import logo from "../assets/logo.png";

export default function Logo() {
    return (
        <Fade in={true} timeout={3000}>
            <img src={logo} alt="יצאת צדיק!" />
        </Fade>
    )
}