import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import env from "react-dotenv";
import ApiContext from '../ApiContext';

function RegisterModal(props){
    const {isShowing, onClose} = props 

    const {stateUser: {mail, psw}, dispatchUser} = useContext(ApiContext);

    const handleSubmit = ((e) => {
        e.preventDefault();
        const user = { mail, psw};

        Axios.post(`${env.SERVER}users`, user).then(() => {
            onClose();
        })
    })

    return(
        <Modal show={isShowing} id="RegisterForm">
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="m-5" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter email" 
                    onChange={(e) => dispatchUser({
                        type: "SET_MAIL",
                        payload: e.target.value
                    })}
                />
            </Form.Group>

            <Form.Group className="m-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={(e) => dispatchUser({
                        type: "SET_PSW",
                        payload: e.target.value
                    })}
                />
            </Form.Group>
            <Button variant="primary" type='submit'>Save</Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );

}

export default RegisterModal;