import React from "react";
import "./Input.scss";

type InputProps = {
    type: "text" | "number",
    placeholder: string,
    characterLimit: number,
    className?: string,
    onChange?: () => void,
}

export const Input = (props: InputProps) => {
    return (
        <input type={props.type} placeholder={props.placeholder} maxLength={props.characterLimit} className={"input"}
               onChange={props.onChange}/>
    )
}
