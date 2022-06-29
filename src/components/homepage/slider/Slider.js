import React from 'react';
import './slider.css'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <div className='image' style={{backgroundImage: 'url(\'https://picsum.photos/2500/1500\')'}}></div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div className='image' style={{backgroundImage: 'url(\'https://picsum.photos/800/400\')'}}></div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <div className='image'  style={{backgroundImage: 'url(\'https://picsum.photos/800/400\')'}}></div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;