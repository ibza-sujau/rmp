import React from 'react';
import './SqwkPage.scss';
import MainButton from "../components/buttons/MainButton";
import { useHistory } from "react-router-dom";

const SqwkPage = () => {

    const history = useHistory();
    const handleClick = () => history.push("/vhs");

    return (
        <div className={"page"}>
            <div className={"rmp"}>
                <div className={"btn-group"}>
                    <MainButton onClick={handleClick} children={"VHF"} />
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

export default SqwkPage;