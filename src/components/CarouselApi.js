import React, {useState, useContext} from 'react';
import ApiContext from "../ApiContext";
import { Carousel } from 'react-bootstrap';

function CarouselApi(){
    
    const [index, setIndex] = useState(0);

    const {stateSolarSyst: {data} } = useContext(ApiContext);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel id='CarouselApi' activeIndex={index} onSelect={handleSelect}>

        {data.map((data) => {
            return(
                <Carousel.Item>
                    <div className='CarouselItem'>
                        <img src={data.src} alt='...'/>

                        <div className='ItemInfo'>
                            <div className='d-flex'>
                                <h1>{data.name.toUpperCase()}</h1>
                            </div>   
                            <ul>
                                {Object.keys(data.information).map((k) => {
                                    if(data.information[k] !== ''){
                                        return(
                                            <li>{`${k}: ${data.information[k]}`}</li>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                </Carousel.Item> 
            );
        })}    
   
        </Carousel>
    );
}

export default CarouselApi;