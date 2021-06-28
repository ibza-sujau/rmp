import React, {useState} from 'react';
import './SqwkPage.scss';
import {useHistory} from "react-router-dom";

// COMPONENTS

import {Input, InputType} from "../components/Input"
import {Button, ButtonType} from "../components/Button";

// CUSTOM LOCAL STORAGE HOOK

function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue] as const;
}

export const SqwkPage = () => {

    const history = useHistory();

    const [SQWK, setSQWK] = useLocalStorage<number>("SQWK", 0);

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
                            <Input inputType={InputType.VHF} characterLimit={4} onChange={handleChangeSQWK} value={SQWK}/>
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