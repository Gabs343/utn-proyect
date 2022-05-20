import React from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Profile(props){
    const navigate = useNavigate();
    const {setLogout} = props;
    
    const handleSubmit = () => {
        localStorage.clear();
        setLogout();
        navigate("/");
    }

    return(
        <div>
            <h1>Profile</h1>
            <Form onSubmit={handleSubmit}>
                <Button variant="danger" type="submit">Exit</Button>
            </Form>
            
        </div>
        
    );
}

export default Profile;