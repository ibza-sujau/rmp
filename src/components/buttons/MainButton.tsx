import React from "react";
import "./MainButton.scss";

export enum ButtonType {
    Left,
    Right,
    Main,
    NumPad
}

type ButtonProps = {
    type: ButtonType,
    className?: string
    onClick?: () => void,
    children?: any,
}

export const Button = (props: ButtonProps) => {
    return (
        <button className={"btn"} onClick={props.onClick}>{props.children}</button>
    );
}