import React from 'react';
import './VhsPage.scss';
import {useHistory} from "react-router-dom";

// COMPONENTS
import {Input} from "../components/Input"
import {Button, ButtonType} from "../components/Button";

export const VhsPage = () => {

    const history = useHistory();

    function clearVHF1() {

    }
    function clearVHF2() {

    }
    function clearVHF3() {

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
                <Button type={ButtonType.Left} onClick={clearVHF1} children={"⬤"}/>
                <Button type={ButtonType.Left} onClick={clearVHF2} children={"⬤"}/>
                <Button type={ButtonType.Left} onClick={clearVHF3} children={"⬤"}/>
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
            <div>
                <Button type={ButtonType.Main} onClick={clearVHF} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} onClick={clearVHF} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} onClick={clearVHF} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
            <div>
                <Button type={ButtonType.Main} onClick={clearVHF} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} onClick={clearVHF} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
                <Button type={ButtonType.Main} onClick={clearVHF} children={"≡≡≡\nCALL"} className={"alt-btn"}/>
            </div>
        </div>
    )
}

export default VhsPage;