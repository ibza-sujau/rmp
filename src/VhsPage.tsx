import React from 'react';
import './VhsPage.scss';
import MainButton from "./components/buttons/MainButton";

const VhsPage = () => {
    return (
        <div className={"page"}>
            <div className={"rmp"}>
                <div>
                    <MainButton y={3} children={"VHF"} />
                    <MainButton y={3} children={"HF"} />
                    <MainButton y={3} children={"TEL"} />
                    <MainButton y={3} children={"SQWK"} />
                    <MainButton y={3} children={"--"} />
                    <MainButton y={3} children={"MENU"} />
                    <MainButton y={3} children={"NAV"} />
                </div>
            </div>
        </div>
    )
}

export default VhsPage;