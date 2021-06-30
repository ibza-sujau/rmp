import React from "react";
import "./Button.scss";

export enum ButtonType {
    Main,
    Left,
    Right,
    NumPad
}

type ButtonProps = {
    type: ButtonType,
    onClick?: () => void,
    children?: any,
    className?: string,
}

export const Button = (props: ButtonProps) => {
    //use `` and ${} to remove dublicate code:
    return(
        <button className={`${ButtonType[props.type].toLowerCase()}-btn ${props.className}`} onClick={props.onClick}>{props.children}</button>       
    );
}