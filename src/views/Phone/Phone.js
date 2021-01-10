import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux"

import { Form, Button } from 'react-bootstrap';
import { setData } from "./../../reducers/userData";



const isEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

const Phone = (props) => {
    const history = useHistory();

    const [dataTemp, setDataTemp] = useState({ phone: '', email: '', politica: false, horario: false })

    const handledClickSubmit = (e) => {
        e.preventDefault();
        props.setData({ ...dataTemp })
        history.push('/price')
    }

    useEffect(() => {
        setDataTemp({ ...props.userData })
    }, [props.userData])


    return <>
        <h1 className="logo">Singular <span className="cover">Cover</span></h1>

        <h3>Hola {dataTemp.name}</h3>
        <h4>¿Te importa darnos tu número de teléfono y correo electrónico ?</h4>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control aria-label="phone-input" type="number" placeholder="+34" onChange={e => { setDataTemp({ ...dataTemp, phone: e.target.value }) }} value={dataTemp.phone} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control aria-label="email-input" type="email" placeholder="Correo electronico" onChange={(e) => { setDataTemp({ ...dataTemp, email: e.target.value }) }} value={dataTemp.email}
                    isInvalid={!isEmail(dataTemp.email)}
                />
                <Form.Control.Feedback type="invalid">
                    No es un email valido
                </Form.Control.Feedback>
            </Form.Group>

            <a href="false" >¿Tienes algun codigo promocional?</a>


            <Form.Group controlId="formBasicCheckbox">
                <Form.Check aria-label="politica-input" type="checkbox" label={<a href="false" >¿Aceptas nuestra politica de privacidad?</a>} onChange={e => { setDataTemp({ ...dataTemp, politica: e.target.checked }) }} checked={dataTemp.politica} />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
                <Form.Check aria-label="horario-input" type="checkbox" label={<a href="false" >Acepto que me llamen, sólo a la hora que quiero</a>} onChange={e => { setDataTemp({ ...dataTemp, horario: e.target.checked }) }} checked={dataTemp.horario} />
            </Form.Group>



            {dataTemp.phone.length > 1 && dataTemp.email.length > 0 && isEmail(dataTemp.email) && dataTemp.politica &&
                <Button variant="primary" type="submit" onClick={handledClickSubmit}>
                    Siguiente
                </Button>}
        </Form>
    </>
}


const mapStateToProps = state => {
    return {
        userData: state.userData,
    }
}


const mapDispatchToProps = {
    setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone)
