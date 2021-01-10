import './About.css'
import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux"
import { Button } from 'react-bootstrap';
import { setData } from "./../../reducers/userData";
import SelectCard from './../../components/SelectCard'

const About = (props) => {
    const history = useHistory();

    const [selectedItems, setSelected] = useState([])
    useEffect(() => {
        setSelected(props.selectedItems)
    }, [props.selectedItems])

    const handleOnClickNext = () => {
        props.setData({ selectedItems: selectedItems });
        history.push('/location')

    }

    return <>
        <h1 className="logo">Singular <span className="cover">Cover</span></h1>
        <h3>¿Cuales son tus inquietudes?</h3>
        <SelectCard className="grid-item btn-product " options={props.apiData} setSelected={setSelected} selectedItems={props.selectedItems} ></SelectCard>
        {selectedItems.length >= 1 && <Button variant="primary" size="lg" block onClick={handleOnClickNext} >Dame un precio</Button>}
    </>
}

const mapStateToProps = state => {
    return {
        apiData: state.apiData,
        selectedItems: state.userData.selectedItems,
    }
}

const mapDispatchToProps = {
    setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(About)
