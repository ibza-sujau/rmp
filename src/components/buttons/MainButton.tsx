import React from "react";
import "./MainButton.scss";

type MainButtonProps = {
    className?: string
    onClick?: () => void,
    children?: any,
}

const MainButton = ({...props}: MainButtonProps) => {
    return(
        <button className={"btn"} onClick={props.onClick}>{props.children}</button>
    )
}

export default MainButton;
