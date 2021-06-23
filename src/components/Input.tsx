import React from "react";
import "./Input.scss";

type InputProps = {
    type: "text" | "number",
    value: string,
    placeholder: string,
    characterLimit: number,
    className?: string,
    onChange?: () => void,
}

export const Input = (props: InputProps) => {
    return (
        <input value={props.value} type={props.type} placeholder={props.placeholder} maxLength={props.characterLimit} className={"input"}
               onChange={props.onChange}/>
    )
}
