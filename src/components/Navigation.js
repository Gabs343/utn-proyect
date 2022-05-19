import React from 'react';
import { Nav } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function Navigation(){
    return(
        <>
            <Nav className="justify-content-center mb-5">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
            </Nav>
            <Outlet/>
        </>
    );
}

export default Navigation;