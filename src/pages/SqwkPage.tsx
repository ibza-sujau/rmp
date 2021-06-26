import React, {useEffect, useState} from 'react';
import './SqwkPage.scss';
import {useHistory} from "react-router-dom";

// COMPONENTS
import {Input, InputType} from "../components/Input"
import {Button, ButtonType} from "../components/Button";

export const SqwkPage = () => {

    const history = useHistory();

    const [SQWK, setSQWK] = useState<string>("");

    useEffect(() => {
        setSQWK(JSON.parse(JSON.stringify(window.localStorage.getItem("SQWK")) || ""));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("SQWK", SQWK);
    }, [SQWK]);

    function handleChangeSQWK(event: any) {
        setSQWK(event.target.value);
    }

    function addColourVHF1() {
        if (window.localStorage.getItem("currentVHF") === "VHF1") {
            return "active-vhf"
        } else return;
    }

    function addColourVHF2() {
        if (window.localStorage.getItem("currentVHF") === "VHF2") {
            return "active-vhf"
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
                    <Button type={ButtonType.Left} children={"⬤"}/>
                    <Button type={ButtonType.Left} children={"⬤"}/>
                    <Button type={ButtonType.Left} children={"⬤"}/>
                    <Button type={ButtonType.Right} children={"MSG\nCLR"}/>
                </div>
                <div className={"screen"}>
                    <div className={"flex-column-main"}>
                        <div className={"flex-column-1"}>
                            <p>AUTO</p>
                        </div>
                        <div className={"flex-column-2"}>
                            <p>SQWK</p>
                            <Input inputType={InputType.VHF} value={SQWK} characterLimit={4} placeholder={"0000"} type={"text"} onChange={handleChangeSQWK}/>
                        </div>
                        <div className={"flex-column-3"}>
                            <p>* IDENT</p>
                        </div>
                    </div>
                    <div className="page-splitter"/>
                </div>
                <div className={"flex-column-item-2"}>
                    <Button type={ButtonType.Right} children={"▬"}/>
                    <Button type={ButtonType.Right} children={"▬"}/>
                    <Button type={ButtonType.Right} children={"▬"}/>
                    <Button type={ButtonType.Right} children={"RST"} className={"alt-btn"}/>
                </div>
            </div>

            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn " + addColourVHF1()}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn " + addColourVHF2()}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
        </div>
    )
}

export default SqwkPage;