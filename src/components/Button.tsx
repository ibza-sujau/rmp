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
    switch(props.type) {
        case ButtonType.Main:
            return (
                <button className={"main-btn " + props.className} onClick={props.onClick}>{props.children}</button>
            )
        case ButtonType.Left:
            return (
                <button className={"left-btn " + props.className} onClick={props.onClick}>{props.children}</button>
            )
        case ButtonType.Right:
            return (
                <button className={"right-btn " + props.className} onClick={props.onClick}>{props.children}</button>
            )
        case ButtonType.NumPad:
            return (
                <button className={"numpad-btn " + props.className} onClick={props.onClick}>{props.children}</button>
            )
    }
}