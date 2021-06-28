import React, {useEffect, useState} from 'react';
import './VhfPage.scss';
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

export const VhfPage = () => {

    const history = useHistory();

    const [VHF1, setVHF1] = useLocalStorage<number>("VHF1", 0);
    const [VHF2, setVHF2] = useLocalStorage<number>("VHF2", 0);
    const [VHF3, setVHF3] = useLocalStorage<number>("VHF2", 0);
    const [STBY1, setSTBY1] = useLocalStorage<number>("VHF2", 0);
    const [STBY2, setSTBY2] = useLocalStorage<number>("VHF2", 0);
    const [STBY3, setSTBY3] = useLocalStorage<number>("VHF2", 0);

    const [currentVFH, setCurrentVHF] = useState<"VHF1" | "VHF2">("VHF1");

    useEffect(() => {
        setVHF1(JSON.parse(JSON.stringify(window.localStorage.getItem("VHF1")) || ""));
        setVHF2(JSON.parse(JSON.stringify(window.localStorage.getItem("VHF2")) || ""));
        setVHF3(JSON.parse(JSON.stringify(window.localStorage.getItem("VHF3")) || ""));
        setSTBY1(JSON.parse(JSON.stringify(window.localStorage.getItem("STBY1")) || ""));
        setSTBY2(JSON.parse(JSON.stringify(window.localStorage.getItem("STBY2")) || ""));
        setSTBY3(JSON.parse(JSON.stringify(window.localStorage.getItem("STBY3")) || ""));
        setCurrentVHF(JSON.parse(JSON.stringify(window.localStorage.getItem("currentVHF")) || ""));
    }, []);

    useEffect(() => {
        window.localStorage.setItem("VHF1", VHF1.toString());
        window.localStorage.setItem("VHF2", VHF2.toString());
        window.localStorage.setItem("VHF3", VHF3.toString());
        window.localStorage.setItem("STBY1", STBY1.toString());
        window.localStorage.setItem("STBY2", STBY2.toString());
        window.localStorage.setItem("STBY3", STBY3.toString());
        window.localStorage.setItem("currentVHF", currentVFH);
    }, [VHF1, VHF2, VHF3, STBY1, STBY2, STBY3, currentVFH]);

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

    function handleChangeSTBY1(event: any) {
        setSTBY1(event.target.value);
    }

    function handleChangeSTBY2(event: any) {
        setSTBY2(event.target.value);
    }

    function handleChangeSTBY3(event: any) {
        setSTBY3(event.target.value);
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

    function switchValueVHF1() {
        setVHF1(STBY1);
        setSTBY1(VHF1);
    }

    function switchValueVHF2() {
        setVHF2(STBY2);
        setSTBY2(VHF2);
    }

    function switchValueVHF3() {
        setVHF3(STBY3);
        setSTBY3(VHF3);
    }

    // VALIDATE VALUE

    function validateValueVHF1() {
        if (VHF1 <= 137.000 && VHF1 >= 118.000) {
            return VHF1;
        } else {
            setVHF1(0);
        }
    }

    function validateValueVHF2() {
        if (VHF2 <= 137.000 && VHF2 >= 118.000) {
            return VHF2;
        } else {
            setVHF2(0);
        }
    }

    function validateValueVHF3() {
        if (VHF3 <= 137.000 && VHF3 >= 118.000) {
            return VHF3;
        } else {
            setVHF3(0);
        }
    }

    function validateValueSTBY1() {
        if (STBY1 <= 137.000 && STBY1 >= 118.000) {
            return STBY1;
        } else {
            setSTBY1(0);
        }
    }

    function validateValueSTBY2() {
        if (STBY2 <= 137.000 && STBY2 >= 118.000) {
            return STBY2;
        } else {
            setSTBY2(0);
        }
    }

    function validateValueSTBY3() {
        if (STBY3 <= 137.000 && STBY3 >= 118.000) {
            return STBY3;
        } else {
            setSTBY3(0);
        }
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
                    <Button type={ButtonType.Left} children={"⬤"} onClick={switchValueVHF1}/>
                    <Button type={ButtonType.Left} children={"⬤"} onClick={switchValueVHF2}/>
                    <Button type={ButtonType.Left} children={"⬤"} onClick={switchValueVHF3}/>
                    <Button type={ButtonType.Right} children={"MSG\nCLR"}/>
                </div>
                <div className={"screen"}>
                    <div className={"flex-row"}>
                        <div className={"flex-row-item-1"}>
                            <Input inputType={InputType.VHF} value={VHF1} characterLimit={7} onChange={handleChangeVHF1} onBlur={validateValueVHF1}/>
                            {checkSelectVHF1()}
                        </div>
                        <div className={"flex-row-item-2"}>
                            <h2 className={addHighlightVHF1()}>VHF1</h2>
                        </div>
                        <div className={"flex-row-item-3 " + addBorderVHF1()}>
                            <p>{handleStandByVHF1()}</p>
                            <Input inputType={InputType.STBY} value={STBY1} placeholder={""} characterLimit={7} onChange={handleChangeSTBY1} className={addSTBYColourVHF1()} onBlur={validateValueSTBY1}/>
                        </div>
                    </div>
                    <div className="page-splitter"/>
                    <div className={"flex-row"}>
                        <div className={"flex-row-item-1"}>
                            <Input inputType={InputType.VHF} value={VHF2} characterLimit={7} onChange={handleChangeVHF2} onBlur={validateValueVHF2}/>
                            {checkSelectVHF2()}
                        </div>
                        <div className={"flex-row-item-2"}>
                            <h2 className={addHighlightVHF2()}>VHF2</h2>
                        </div>
                        <div className={"flex-row-item-3 " + addBorderVHF2()}>
                            <p>{handleStandByVHF2()}</p>
                            <Input inputType={InputType.STBY} value={STBY2} characterLimit={7} onChange={handleChangeSTBY2} className={addSTBYColourVHF2()} onBlur={validateValueSTBY2}/>
                        </div>
                    </div>
                    <div className="page-splitter"/>
                    <div className={"flex-row"}>
                        <div className={"flex-row-item-1"}>
                            <Input inputType={InputType.VHF} value={VHF3} characterLimit={7} onChange={handleChangeVHF3} onBlur={validateValueVHF3}/>
                        </div>
                        <div className={"flex-row-item-2"}>
                            <h2>VHF3</h2>
                        </div>
                        <div className={"flex-row-item-3"}>
                            <Input inputType={InputType.STBY} value={STBY3} characterLimit={7} onChange={handleChangeSTBY3} onBlur={validateValueSTBY3}/>
                        </div>
                    </div>
                    <div className="page-splitter"/>
                    <p style={{marginTop: 10}}>SQUAWK: {window.localStorage.getItem("SQWK")}</p>
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