import React from "react";
import { Fade } from "@mui/material";
import logo from "../assets/logo.png";
import { IDropsProps } from "../model/interfaces";

export default function Logo(props: IDropsProps) {
    const { numOfDrops } = props;
    const display = numOfDrops === 100;
    return (
        <Fade in={display} timeout={2000}>
            <img src={logo} alt="יצאת צדיק!" height="256" width="256"/>
        </Fade>
    )
}