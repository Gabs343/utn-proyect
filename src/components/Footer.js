import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div className='Footer container'>
            <h3>Gabriel López</h3>
            <a href="https://github.com/Gabs343"><FaGithub className='Icon'/></a>
            <a href="https://www.linkedin.com/in/gabriellopez343/"><FaLinkedin className='Icon'/></a>
        </div>
    );
}

export default Footer;