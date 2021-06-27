import React from "react";
import "./Input.scss";

export enum InputType {
    VHF,
    STBY
}

type InputProps = {
    inputType: InputType,
    value: number,
    characterLimit: number,
    className?: string,
    onClick?: () => void,
    onChange?: (event: any) => void,
    selected?: boolean,
}

export const Input = (props: InputProps) => {
    switch(props.inputType) {
        case InputType.VHF:
            return (
                <input value={props.value} type={"number"} maxLength={props.characterLimit} className={"vhf-input " + props.className} onChange={props.onChange} onClick={props.onClick}/>
            )
        case InputType.STBY:
            return (
                <input value={props.value} type={"number"} maxLength={props.characterLimit} className={"stby-input " + props.className} onChange={props.onChange} onClick={props.onClick}/>
            )
    }
}
