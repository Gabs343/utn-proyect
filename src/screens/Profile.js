import React, {useContext} from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../ApiContext'

function Profile(){
    const navigate = useNavigate();
 
    const {dispatchUser} = useContext(ApiContext);
    
    const handleSubmit = () => {
        localStorage.clear();
        dispatchUser({type: "SET_LOG", payload: localStorage.getItem("id") !== null })
        navigate("/");
    }

    return(
        <div className='Profile container'>
            <h1>Profile</h1>
            <Form onSubmit={handleSubmit}>
                <Button variant="danger" type="submit">Exit</Button>
            </Form>
            
        </div>
        
    );
}

export default Profile;