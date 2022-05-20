import React from 'react';
import { Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function Navigation(props){
    const { isLogged } = props
    return(
        <>
            <Nav className="justify-content-center mb-5">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={isLogged ? "/profile" : "/login" }>{isLogged ? "Profile" : "Login"}</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet/>
        </>
    );
}

export default Navigation;