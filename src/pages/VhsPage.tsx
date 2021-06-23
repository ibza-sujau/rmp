import React from 'react';
import './VhsPage.scss';
import MainButton from "../components/buttons/MainButton";
import { useHistory } from "react-router-dom";

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
                    <input>118.300</input>
                    <h1>118.300</h1>
                    <h1>118.300</h1>
                </div>
            </div>
        </div>
    )
}

export default VhsPage;