import React, {useEffect, useState} from 'react';
import './VhfPage.scss';
import {useHistory} from "react-router-dom";

// COMPONENTS
import {Input} from "../components/Input"
import {Button, ButtonType} from "../components/Button";

export const VhfPage = () => {

    const history = useHistory();

    const [VHF1, setVHF1] = useState<string>("");
    const [VHF2, setVHF2] = useState<string>("");
    const [VHF3, setVHF3] = useState<string>("");

    const [currentVFH, setCurrentVHF] = useState<"VHF1" | "VHF2">("VHF1");

    useEffect(() => {
        setVHF1(JSON.parse(JSON.stringify(window.localStorage.getItem("VHF1")) || ""));
        setVHF2(JSON.parse(JSON.stringify(window.localStorage.getItem("VHF2")) || ""));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("VHF1", VHF1);
        window.localStorage.setItem("VHF2", VHF2);
    }, [VHF1, VHF2]);

    function clearStateVHF1() {
        setVHF1("");
    }

    function clearStateVHF2() {
        setVHF2("");
    }

    // HANDLE VALUE CHANGES IN VHF

    function handleChangeVHF1(event: any) {
        setVHF1(event.target.value);
    }

    function handleChangeVHF2(event: any) {
        setVHF2(event.target.value);
    }

    function handleChangeVHF3(event: any) {
        setVHF3(event.target.value);
    }

    // SELECT VHF

    function handleSelectVHF1() {
        setCurrentVHF("VHF1");

    }

    function handleSelectVHF2() {
        setCurrentVHF("VHF2")
    }

    // ADD VOLUME SVG

    function checkSelectVHF1() {
        if (currentVFH === "VHF1") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718.5 868" style={{fill: "#fff"}} width={"100px"} height={"30px"}>
                    <title>Volume SVG</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon className="cls-1" points="397.2 208.47 0 208.47 0 663.79 402.88 663.79 402.88 663.21 718.5 868 718.5 434 718.5 0 397.2 208.47"/>
                        </g>
                    </g>
                </svg>
            )
        } else return;
    }

    function checkSelectVHF2() {
        if (currentVFH === "VHF2") {
            return (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 718.5 868" style={{fill: "#fff"}} width={"100px"} height={"30px"}>
                    <title>Volume SVG</title>
                    <g id="Layer_2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1">
                            <polygon className="cls-1" points="397.2 208.47 0 208.47 0 663.79 402.88 663.79 402.88 663.21 718.5 868 718.5 434 718.5 0 397.2 208.47"/>
                        </g>
                    </g>
                </svg>
            )
        } else return;
    }

    // ADD COLOUR

    function addColourVHF1() {
        if (currentVFH === "VHF1") {
            return "active-vhf"
        } else return;
    }

    function addColourVHF2() {
        if (currentVFH === "VHF2") {
            return "active-vhf"
        } else return;
    }

    // ADD STBY TEXT

    function handleStandByVHF1() {
        if (currentVFH === "VHF1") {
            return "STBY";
        } else return;
    }

    function handleStandByVHF2() {
        if (currentVFH === "VHF2") {
            return "STBY";
        } else return;
    }

    // ADD BORDER

    function addBorderVHF1() {
        if (currentVFH === "VHF1") {
            return "stby-border";
        } else return;
    }

    function addBorderVHF2() {
        if (currentVFH === "VHF2") {
            return "stby-border";
        } else return;
    }

    // ADD HIGHLIGHT

    function addHighlightVHF1() {
        if (currentVFH === "VHF1") {
            return "highlight";
        } else return;
    }

    function addHighlightVHF2() {
        if (currentVFH === "VHF2") {
            return "highlight";
        } else return;
    }

    // ADD STBY COLOUR

    function addSTBYColourVHF1() {
        if (currentVFH === "VHF1") {
            return "stby-freq";
        } else return;
    }

    function addSTBYColourVHF2() {
        if (currentVFH === "VHF2") {
            return "stby-freq";
        } else return;
    }

    return (
        <div className={"page"}>
            <div className={"flex-row main-button-group"}>
                <Button type={ButtonType.Main} children={"VHF"} onClick={() => history.push("/vhs")}/>
                <Button type={ButtonType.Main} children={"HF"}/>
                <Button type={ButtonType.Main} children={"TEL"}/>
                <Button type={ButtonType.Main} children={"SQWK"} onClick={() => history.push("/sqwk")}/>
                <Button type={ButtonType.Main} children={"-"}/>
                <Button type={ButtonType.Main} children={"MENU"}/>
                <Button type={ButtonType.Main} children={"NAV"}/>
            </div>
            <div className={"flex-column"}>
                <div className={"flex-column-item-1"}>
                    <Button type={ButtonType.Left} children={"⬤"} onClick={clearStateVHF1}/>
                    <Button type={ButtonType.Left} children={"⬤"} onClick={clearStateVHF2}/>
                    <Button type={ButtonType.Left} children={"⬤"}/>
                    <Button type={ButtonType.Right} children={"MSG\nCLR"}/>
                </div>
                <div className={"screen"}>
                    <div className={"flex-row"}>
                        <div className={"flex-row-item-1"}>
                            <Input value={VHF1} characterLimit={7} placeholder={"000.000"} type={"text"} onChange={handleChangeVHF1}/>
                            {checkSelectVHF1()}
                        </div>
                        <div className={"flex-row-item-2"}>
                            <h2 className={addHighlightVHF1()}>VHF1</h2>
                        </div>
                        <div className={"flex-row-item-3 " + addBorderVHF1()}>
                            <p>{handleStandByVHF1()}</p>
                            <p className={addSTBYColourVHF1()}>123.124</p>
                        </div>
                    </div>
                    <div className="page-splitter"/>
                    <div className={"flex-row"}>
                        <div className={"flex-row-item-1"}>
                            <Input value={VHF2} characterLimit={7} placeholder={"000.000"} type={"text"} onChange={handleChangeVHF2}/>
                            {checkSelectVHF2()}
                        </div>
                        <div className={"flex-row-item-2"}>
                            <h2 className={addHighlightVHF2()}>VHF2</h2>
                        </div>
                        <div className={"flex-row-item-3 " + addBorderVHF2()}>
                            <p>{handleStandByVHF2()}</p>
                            <p className={addSTBYColourVHF2()}>123.124</p>
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
                            <p>123.124</p>
                        </div>
                    </div>
                    <div className="page-splitter"/>
                    <p style={{marginTop: 10}}>SQUAWK: 7000</p>
                </div>
                <div className={"flex-column-item-2"}>
                    <Button type={ButtonType.Right} children={"▬"}/>
                    <Button type={ButtonType.Right} children={"▬"}/>
                    <Button type={ButtonType.Right} children={"▬"}/>
                    <Button type={ButtonType.Right} children={"RST"} className={"alt-btn"}/>
                </div>
            </div>



            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn " + addColourVHF1()} onClick={handleSelectVHF1}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn " + addColourVHF2()} onClick={handleSelectVHF2}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
        </div>
    )
}

export default VhfPage;