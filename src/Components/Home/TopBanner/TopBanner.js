import React from 'react';
import { Carousel } from 'react-bootstrap';
import CarouselImg1 from '../../../Images/CarouselImg1.jpg'
import CarouselImg2 from '../../../Images/CarouselImg2.jpg'

const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselImg1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2>WE PROVIDE COLOR COMBINATIONS FOR YOUR HOUSE</h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CarouselImg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>PAINTING IS OUR PASSION</h1>
                    <h3 style={{color:"black"}}>We make if priority to offer flexible services to accommodate your needs</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;