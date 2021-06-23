import React from "react";
import "./MainButton.scss";

type MainButtonProps = {
    className?: string
    onClick?: () => void,
    x?: number,
    y?: number,
    textColor?: string,
    children?: any,
}

const MainButton = ({...props}: MainButtonProps) => {
    return(
        <button className={props.className} onClick={props.onClick} style={{left: props.x + "%", top: props.y + "%", color: props.textColor}}>{props.children}</button>
    )
}

export default MainButton;
