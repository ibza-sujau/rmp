import React from "react";
import "./Input.scss";

export enum InputType {
    VHF,
    STBY
}

type InputProps = {
    type: "text" | "number",
    inputType: InputType,
    value: string,
    placeholder: string,
    characterLimit: number,
    defaultValue?: any,
    className?: string,
    onClick?: () => void,
    onChange?: (event: any) => void,
    selected?: boolean,
}

export const Input = (props: InputProps) => {
    switch(props.inputType) {
        case InputType.VHF:
            return (
                <input value={props.value} type={props.type} placeholder={props.placeholder} maxLength={props.characterLimit} className={"vhf-input"} onChange={props.onChange} onClick={props.onClick}/>
            )
        case InputType.STBY:
            return (
                <input value={props.value} type={props.type} placeholder={props.placeholder} maxLength={props.characterLimit} className={"stby-input"} onChange={props.onChange} onClick={props.onClick}/>
            )
    }
}
