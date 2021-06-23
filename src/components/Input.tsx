import React from "react";
import "./Input.scss";

type InputProps = {
    type: "text" | "number",
    placeholder: string,
    className?: string,
    onChange?: () => void,
}

const Input = ({...props}: InputProps) => {
    return(
        <input type={props.type} placeholder={props.placeholder} className={"input"} onChange={props.onChange}/>
    )
}

export default Input;
