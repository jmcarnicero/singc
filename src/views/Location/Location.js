import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from "react-redux"

import { Form, Button } from 'react-bootstrap';
import { setData } from "./../../reducers/userData";

const Location = (props) => {
    const history = useHistory();

    const [location, setLocation] = useState('')

    useEffect(() => {
        setLocation(props.location)
    }, [props.location])

    const handledClickSubmit = (e) => {
        e.preventDefault();
        props.setData({ location })
        history.push('/name')
    }

    return <>
        <h1 className="logo">Singular <span className="cover">Cover</span></h1>

        <h3>¿Cual es la dirección de tu comercio o razón social?</h3>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="" onChange={e => { setLocation(e.target.value) }} value={location} />
            </Form.Group>
            {location.length > 1 && <Button variant="primary" type="submit" onClick={handledClickSubmit}>
                Sigiente
                </Button>}
        </Form>
    </>
}


const mapStateToProps = state => {
    return {
        location: state.userData.location,
    }
}

const mapDispatchToProps = {
    setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Location)
