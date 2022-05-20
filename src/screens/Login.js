import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import RegisterModal from '../components/RegisterModal';
import { useRegister } from '../hook/useRegister';
import env from "react-dotenv";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../ApiContext';

function Login(props){
    const navigate = useNavigate();
    const { show, on, off } = useRegister();
    const {setLogin} = props;

    const {stateUser: {mail, psw}, dispatchUser} = useContext(ApiContext);

    const handleSubmit = ((e) => {
        e.preventDefault();

        Axios.get(`${env.SERVER}users?mail=${mail}&password=${psw}`).then((response) => {
            localStorage.setItem("id", response.data[0]["id"]);
            setLogin();
            navigate("/");
        })
    })
    
    return(
        <div className='Login container'>
        <h1>Login</h1>
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
            <Button variant="primary" type="submit">Login</Button>
            <Button variant="primary" onClick={on}>Sign up</Button>
        </Form>
        <RegisterModal isShowing={show} onClose={off}/>
        </div>
    );
}

export default Login;

