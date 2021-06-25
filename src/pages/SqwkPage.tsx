import React from 'react';
import './SqwkPage.scss';
import {useHistory} from "react-router-dom";
import {useState} from "react";

// COMPONENTS
import {Input} from "../components/Input"
import {Button, ButtonType} from "../components/Button";

export const SqwkPage = () => {

    const history = useHistory();

    const [SQWK, setSQWK] = useState<string>("");

    function handleChangeSQWK(event: any) {
        setSQWK(event.target.value);
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
                            <Input value={SQWK} characterLimit={4} placeholder={"7000"} type={"text"} onChange={handleChangeSQWK}/>
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
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn "}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
            <div className={"flex-row"}>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
        </div>
    )
}

export default SqwkPage;