import React from 'react';
import './VhsPage.scss';
import MainButton from "./components/buttons/MainButton";

const VhsPage = () => {
    return (
        <div className={"page"}>
            <div className={"rmp"}>
                <div className={"btn-group"}>
                    <MainButton children={"VHF"} />
                    <MainButton children={"HF"} />
                    <MainButton children={"TEL"} />
                    <MainButton children={"SQWK"} />
                    <MainButton children={"--"} />
                    <MainButton children={"MENU"} />
                    <MainButton children={"NAV"} />
                </div>
            </div>
        </div>
    )
}

export default VhsPage;