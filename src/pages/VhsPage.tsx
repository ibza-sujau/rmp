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
                    <text>118.300</text>
                    <text>118.300</text>
                    <text>118.300</text>
                </div>
            </div>
        </div>
    )
}

export default VhsPage;