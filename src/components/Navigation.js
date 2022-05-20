import React, {useContext} from 'react';
import { Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import ApiContext from '../ApiContext';

function Navigation(){
    const {stateUser: {logged}} = useContext(ApiContext);
    return(
        <>
            <Nav className="justify-content-center mb-5">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={logged ? "/profile" : "/login" }>{logged ? "Profile" : "Login"}</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet/>
        </>
    );
}

export default Navigation;