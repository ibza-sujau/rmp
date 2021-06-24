import React from 'react';
import './VhsPage.scss';
import {useHistory} from "react-router-dom";
import {useState} from "react";

// COMPONENTS
import {Input} from "../components/Input"
import {Button, ButtonType} from "../components/Button";

export const VhsPage = () => {

    const history = useHistory();

    const [VHF1, setVHF1] = useState(String);
    const [VHF2, setVHF2] = useState(String);
    const [VHF3, setVHF3] = useState(String);

    function updateVHF1(value: string) {
        setVHF1(value);
    }

    return (
        <div className={"page"}>
            <div>
                <Button type={ButtonType.Main} children={"VHF"} onClick={() => history.push("/vhs")}/>
                <Button type={ButtonType.Main} children={"HF"}/>
                <Button type={ButtonType.Main} children={"TEL"}/>
                <Button type={ButtonType.Main} children={"SQWK"} onClick={() => history.push("/sqwk")} />
                <Button type={ButtonType.Main} children={"-"}/>
                <Button type={ButtonType.Main} children={"MENU"}/>
                <Button type={ButtonType.Main} children={"NAV"}/>
            </div>
            <div>
                <Button type={ButtonType.Left} children={"⬤"}/>
                <Button type={ButtonType.Left} children={"⬤"}/>
                <Button type={ButtonType.Left} children={"⬤"}/>
                <Button type={ButtonType.Right} children={"MSG\nCLR"}/>
            </div>
            <div>
                <Button type={ButtonType.Right} children={"▬"}/>
                <Button type={ButtonType.Right} children={"▬"}/>
                <Button type={ButtonType.Right} children={"▬"}/>
                <Button type={ButtonType.Right} children={"▬"}/>
            </div>
            <div className={"screen"}>
                <div className={"flex-row"}>
                    <div className={"flex-row-item-1"}>
                        <Input value={VHF1} characterLimit={7} placeholder={"DATA"} type={"text"} onChange={(value) => updateVHF1(value)}/>
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
                        <Input value={VHF2} characterLimit={7} placeholder={"DATA"} type={"text"}/>
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
                        <Input value={VHF3} characterLimit={7} placeholder={"DATA"} type={"text"}/>
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
            <div>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
            <div>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
        </div>
    )
}

export default VhsPage;