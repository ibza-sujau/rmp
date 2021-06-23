import React from 'react';
import './VhsPage.scss';
import { useHistory } from "react-router-dom";

import Input from "../components/Input"
import MainButton from "../components/buttons/MainButton";

const VhsPage = () => {

    const history = useHistory();

    return (
        <div className={"page"}>
            <MainButton onClick={() => history.push("/vhs")} children={"VHF"} />
            <MainButton children={"HF"} />
            <MainButton children={"TEL"} />
            <MainButton onClick={() => history.push("/sqwk")} children={"SQWK"} />
            <MainButton children={"-"} />
            <MainButton children={"MENU"} />
            <MainButton children={"NAV"} />
            <div className={"screen"}>
                <div className={"row-1"}>
                    <div className={"col-1"}>
                        <Input characterLimit={7} placeholder={"DATA"} type={"text"}/>
                    </div>
                    <div className={"col-2"}>
                        <h2>VHF1</h2>
                    </div>
                    <div className={"col-3"}>
                        <p>STBY</p>
                        <p>123.124</p>
                    </div>
                </div>
                <div className="page-splitter"/>
                <p className={"sqwk"}>SQUAWK: 7000</p>
            </div>
        </div>
    )
}

export default VhsPage;