import React from 'react';
import './VhsPage.scss';
import { useHistory } from "react-router-dom";

// COMPONENTS
import { Input } from "../components/Input"
import { Button, ButtonType } from "../components/Button";

export const VhsPage = () => {

    const history = useHistory();

    return (
        <div className={"page"}>
            <Button onClick={() => history.push("/vhs")} children={"VHF"}  type={ButtonType.Main}/>
            <Button children={"HF"}  type={ButtonType.Main}/>
            <Button children={"TEL"} type={ButtonType.Main}/>
            <Button onClick={() => history.push("/sqwk")} children={"SQWK"} type={ButtonType.Main}/>
            <Button children={"-"} type={ButtonType.Main}/>
            <Button children={"MENU"} type={ButtonType.Main}/>
            <Button children={"NAV"} type={ButtonType.Main}/>
            <div className={"screen"}>
                <div className={"flex-row"}>
                    <div className={"flex-row-item-1"}>
                        <Input characterLimit={7} placeholder={"DATA"} type={"text"}/>
                    </div>
                    <div className={"flex-row-item-2"}>
                        <h2>VHF1</h2>
                    </div>
                    <div className={"flex-row-item-3"}>
                        <p>STBY</p>
                        <p>123.124</p>
                    </div>
                </div>
                <div className="page-splitter"/>
                <div className={"flex-row"}>
                    <div className={"flex-row-item-1"}>
                        <Input characterLimit={7} placeholder={"DATA"} type={"text"}/>
                    </div>
                    <div className={"flex-row-item-2"}>
                        <h2>VHF2</h2>
                    </div>
                    <div className={"flex-row-item-3"}>
                        <p>STBY</p>
                        <p>123.124</p>
                    </div>
                </div>
                <div className="page-splitter"/>
                <div className={"flex-row"}>
                    <div className={"flex-row-item-1"}>
                        <Input characterLimit={7} placeholder={"DATA"} type={"text"}/>
                    </div>
                    <div className={"flex-row-item-2"}>
                        <h2>VHF3</h2>
                    </div>
                    <div className={"flex-row-item-3"}>
                        <p>STBY</p>
                        <p>123.124</p>
                    </div>
                </div>
                <div className="page-splitter"/>
            </div>
        </div>
    )
}

export default VhsPage;