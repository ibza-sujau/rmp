import React from "react";
import "./MainButton.scss";

type MainButtonProps = {
    className?: string
    onClick?: () => void,
    x?: number,
    y?: number,
    children?: any,
}

const MainButton = ({...props}: MainButtonProps) => {
    return(
        <button className={"main-btn"} onClick={props.onClick} style={{left: props.x + "%", top: props.y + "%"}}>{props.children}</button>
    )
}

export default MainButton;
