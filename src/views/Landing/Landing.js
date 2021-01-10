import React, { useEffect } from "react";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux"
import axios from 'axios'
import { setApiData } from './../../reducers/apiData'

const Landing = (props) => {

    const history = useHistory();

    const url = 'https://a6aee84c-b0b6-4a3c-9536-6c97f3f7f434.mock.pstmn.io/concerns'
    useEffect(() => {
        getData(url, props)
    }, [ props])

    const getData = (url, props) => {
        return axios.get(url).then(res => {
            props.setApiData(res.data);
        })
    }


    return (
        <>
            <h1 className="logo">Singular <span className="cover">Cover</span></h1>
            <h2>Especialistas en Seguros para Pymes y Autónomos</h2>
            <p>Aun no hemos inventado la maquina del tiempo. Por ahora te tendrás que conformar con un seguro</p>

            <h3>Te damos un precio en pocos minutos</h3>
            <Button variant="primary" size="lg" block onClick={() => { history.push('/about') }}  >Dame un precio</Button>
        </>

    )
}

const mapDispatchToProps = {
    setApiData,
};


export default connect(null, mapDispatchToProps)(Landing)
