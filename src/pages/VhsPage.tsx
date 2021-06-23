import React from 'react';
import './VhsPage.scss';
import { useHistory } from "react-router-dom";

import Input from "../components/Input"
import MainButton from "../components/buttons/MainButton";

const VhsPage = () => {

    const history = useHistory();

    return (
        <div className={"page"}>
            <div className={"rmp"}>
                <MainButton onClick={() => history.push("/vhs")} children={"VHF"} />
                <MainButton children={"HF"} />
                <MainButton children={"TEL"} />
                <MainButton onClick={() => history.push("/sqwk")} children={"SQWK"} />
                <MainButton children={"-"} />
                <MainButton children={"MENU"} />
                <MainButton children={"NAV"} />
                <div className={"screen"}>
                    <Input placeholder={"DATA"} type={"text"}/>
                    <div className="page-splitter"/>
                    <Input placeholder={"DATA"} type={"text"}/>
                    <div  className="page-splitter"/>
                    <Input placeholder={"DATA"} type={"text"}/>
                    <div className="page-splitter"/>
                    <p className={"sqwk"}>SQUAWK: 7000</p>
                </div>

            </div>
        </div>
    )
}

export default VhsPage;