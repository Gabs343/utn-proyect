import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';

function CarouselApi(props){
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel id='CarouselApi' activeIndex={index} onSelect={handleSelect}>

        {props.info.map((data) => {
            return(
                <Carousel.Item>
                    <div className='CarouselItem'>
                        <img src={data.src} alt='...'/>

                        <div className='ItemInfo'>
                            <h1>{data.name.toUpperCase()}</h1>    
                            <ul>
                                {Object.keys(data.information).map((k) => {
                                    if(data.information[k] != ''){
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