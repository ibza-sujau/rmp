import React from "react";
import "./Button.scss";

export enum ButtonType {
    Left,
    Right,
    Main,
    NumPad
}

type ButtonProps = {
    type: ButtonType,
    onClick?: () => void,
    children?: any
}

export const Button = (props: ButtonProps) => {
    if (props.type === ButtonType.Main) {
        return (
            <button onClick={props.onClick}>{props.children}</button>
        )
    }
}