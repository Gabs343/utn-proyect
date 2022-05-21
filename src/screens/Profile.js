import React, {useContext, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ApiContext from '../ApiContext';
import Axios from 'axios';
import env from "react-dotenv";


function Profile(){
    const navigate = useNavigate();
 
    const {stateUser:{data}, dispatchUser} = useContext(ApiContext);

    const handleSubmit = () => {
        localStorage.clear();
        dispatchUser({type: "SET_LOG", payload: localStorage.getItem("id") !== null })
        dispatchUser({type: "SET_USER", payload: null })
        navigate("/");
    }

    useEffect(() => {
        Axios.get(`${env.SERVER}users/${localStorage.getItem("id")}`).then((response) => {
            dispatchUser({type: "SET_USER", payload: response.data})
        })
      }, []);
      
    return(
        <div className='Profile container'>
            <h1>Profile</h1>
            <div className='m-5'>
            {Object.keys(data).map((k) => {
                return(
                    <p>{`${k}: ${data[k]}`}</p>
                );
            })}
            </div>
            <Form onSubmit={handleSubmit}>

                <Button variant="danger" type="submit">Exit</Button>
            </Form>
            
        </div>
        
    );
}

export default Profile;