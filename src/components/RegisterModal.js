import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Axios from 'axios';
import env from "react-dotenv";

function RegisterModal(props){
    const {isShowing, onClose} = props 

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    const handleMailChange = ((e) => {
        setMail(e.target.value);
    })

    const handlePasswordChange = ((e) => {
        setPassword(e.target.value);
    })

    const handleSubmit = ((e) => {
        e.preventDefault();
        const user = { mail, password};

        Axios.post(`${env.SERVER}users`, user).then((response) => {
            console.log(response.data);
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
                <Form.Control type="email" placeholder="Enter email" onChange={handleMailChange}/>
            </Form.Group>

            <Form.Group className="m-5" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
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