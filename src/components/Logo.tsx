import React from "react";
import { Fade } from "@mui/material";
import logo from "../assets/logo.png";
import { IDropsProps } from "../model/interfaces";
import styled from "@emotion/styled";

const SpinImage = styled.img`
    width: 256px;
    height: 256px;
    animation:spin 1.5s linear infinite;

@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
}}`

export default function Logo(props: IDropsProps) {
    const { numOfDrops, righteous } = props;
    const display = righteous || numOfDrops === 100;
    return (
        <Fade in={display} timeout={2000}>
            <SpinImage src={logo} alt="יצאת צדיק!" />
        </Fade>
    )
}