import React, { useState } from "react";
import { connect } from "react-redux"
import { Button } from 'react-bootstrap';
import SelectCard from './../../components/SelectCard'


const downloadObjectAsJson = (exportObj, exportName) => {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

const Price = ({ userData }) => {
    const [finalSelected, setFinalSelected] = useState([])
    const { name = '', selectedItems = [] } = userData

    const data = [
        { id: "CONCERN_02", value: "LEGAL_REQUIREMENT 1" },
        { id: "CONCERN_04", value: "LEGAL_REQUIREMENT 2 " },
        { id: "CONCERN_05", value: "LEGAL_REQUIREMENT 3" },]

    const handleOnClickDownloadJson = (e) => {
        e.preventDefault();
        downloadObjectAsJson(userData, 'file.json')
    }

    return (
        <>
            <h1 className="logo">Singular <span className="cover">Cover</span></h1>
            <h3 aria-label="h3-label" >{name}</h3>
            <SelectCard disabled className="grid-item btn-product price" options={selectedItems} setSelected={() => { }} selectedItems={[]} ></SelectCard>
            <h4>Sugerencias para ti</h4>
            <SelectCard className="grid-item btn-product suggestion" options={data} setSelected={setFinalSelected} selectedItems={finalSelected} ></SelectCard>

            {finalSelected.length > 0 &&
                < Button variant="primary" type="submit" onClick={(e) => { handleOnClickDownloadJson(e) }}  >
                    Siguiente
                </Button>
            }
        </>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.userData,
    }
}

export default connect(mapStateToProps, null)(Price)