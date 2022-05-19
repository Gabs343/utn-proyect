import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CarouselApi from "../components/CarouselApi";
import env from "react-dotenv";

function Home(){
    const [data, setData] = useState([]);

    useEffect(() => {
        Axios.get(`${env.SERVER}solarSystem`).then((response) => {
            setData(response.data)
        })
    }, []);

    return(
        <div className="container">
            <CarouselApi info={data} />
        </div>
    );
}

export default Home;