import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux"

import { Form, Button } from 'react-bootstrap';
import { setData } from "./../../reducers/userData";

const Name = (props) => {
    const history = useHistory();

    const [name, setName] = useState('')

    useEffect(() => {
        setName(props.name)
    }, [props.name])

    const handledClickSubmit = (e) => {
        e.preventDefault();
        props.setData({ name })
        history.push('/phone')
    }

    return <>
        <h1 className="logo">Singular <span className="cover">Cover</span></h1>

        <h3>¿Como te llamas?</h3>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control aria-label="name-input" type="text" placeholder="" onChange={e => { setName(e.target.value) }} value={name}
                    isInvalid={name.length > 20}
                />
                <Form.Control.Feedback type="invalid">
                    Mas de 20 caracteres
                    </Form.Control.Feedback>
            </Form.Group>
            {name.length > 0 && name.length <= 20 && < Button variant="primary" type="submit" onClick={handledClickSubmit}>
                Siguiente
                </Button>}
        </Form>
    </>
}


const mapStateToProps = state => {
    return {
        name: state.userData.name,
    }
}

const mapDispatchToProps = {
    setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Name)
