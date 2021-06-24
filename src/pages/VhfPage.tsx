import React from 'react';
import './VhfPage.scss';
import {useHistory} from "react-router-dom";
import {useState} from "react";

// COMPONENTS
import {Input} from "../components/Input"
import {Button, ButtonType} from "../components/Button";

export const VhfPage = () => {

    const history = useHistory();

    const [VHF1, setVHF1] = useState(String);
    const [VHF2, setVHF2] = useState(String);
    const [VHF3, setVHF3] = useState(String);

    const [selectVHF1, setSelectVHF1] = useState(Boolean);
    const [selectVHF2, setSelectVHF2] = useState(Boolean);

    function handleChangeVHF1(event: any) {
        setVHF1(event.target.value);
    }

    function handleChangeVHF2(event: any) {
        setVHF2(event.target.value);
    }

    function handleChangeVHF3(event: any) {
        setVHF3(event.target.value);
    }

    function handleSelectVHF() {
        if (selectVHF1 === true) {
            setSelectVHF1(false);
        } else {
            setSelectVHF1(true);
        }
        if (selectVHF2 === true) {
            setSelectVHF2(false);
        } else {
            setSelectVHF2(true);
        }
    }

    function checkSelectState() {
        if (selectVHF1 === true) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718.5 868" style={{fill: "#fff"}} width={"100px"} height={"35px"}>
                    <title>Volume SVG</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon className="cls-1" points="397.2 208.47 0 208.47 0 663.79 402.88 663.79 402.88 663.21 718.5 868 718.5 434 718.5 0 397.2 208.47"/>
                        </g>
                    </g>
                </svg>
            )
        } else {
            return;
        }
    }

    function checkSelectState2() {
        if (selectVHF2 === true) {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718.5 868" style={{fill: "#fff"}} width={"100px"} height={"35px"}>
                    <title>Volume SVG</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon className="cls-1" points="397.2 208.47 0 208.47 0 663.79 402.88 663.79 402.88 663.21 718.5 868 718.5 434 718.5 0 397.2 208.47"/>
                        </g>
                    </g>
                </svg>
            )
        } else {
            return;
        }
    }

    return (
        <div className={"page"}>
            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"VHF"} onClick={() => history.push("/vhs")}/>
                <Button type={ButtonType.Main} children={"HF"}/>
                <Button type={ButtonType.Main} children={"TEL"}/>
                <Button type={ButtonType.Main} children={"SQWK"} onClick={() => history.push("/sqwk")}/>
                <Button type={ButtonType.Main} children={"-"}/>
                <Button type={ButtonType.Main} children={"MENU"}/>
                <Button type={ButtonType.Main} children={"NAV"}/>
            </div>
            <div className={"flex-column"}>
                <Button type={ButtonType.Left} children={"⬤"}/>
                <Button type={ButtonType.Left} children={"⬤"}/>
                <Button type={ButtonType.Left} children={"⬤"}/>
                <Button type={ButtonType.Right} children={"MSG\nCLR"}/>
            </div>
            <div className={"flex-column"}>
                <Button type={ButtonType.Right} children={"▬"}/>
                <Button type={ButtonType.Right} children={"▬"}/>
                <Button type={ButtonType.Right} children={"▬"}/>
                <Button type={ButtonType.Right} children={"▬"}/>
            </div>
            <div className={"screen"}>
                <div className={"flex-row"}>
                    <div className={"flex-row-item-1"}>
                        <Input value={VHF1} characterLimit={7} placeholder={"DATA"} type={"text"} onChange={handleChangeVHF1}/>
                        {checkSelectState()}
                    </div>
                    <div className={"flex-row-item-2 highlight"}>
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
                        <Input value={VHF2} characterLimit={7} placeholder={"DATA"} type={"text"} onChange={handleChangeVHF2}/>
                        {checkSelectState2()}
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
                        <Input value={VHF3} characterLimit={7} placeholder={"DATA"} type={"text"} onChange={handleChangeVHF3}/>
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
            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"} onClick={handleSelectVHF1}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"} onClick={handleSelectVHF2}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
        </div>
    )
}

export default VhfPage;