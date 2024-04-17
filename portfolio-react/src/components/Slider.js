import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {

    const baseUrl = "https://react-responsive-carousel.js.org/assets/";
    const datas = [
        {
            id: 1,
            image: `${baseUrl}1.jpeg`,
            title: "Titre du slider 1",
            text: "text du slider 1",
        },
        {
            id: 2,
            image: `${baseUrl}2.jpeg`,
            title: "Titre du slider 2",
            text: "text du slider 2",
        },
        {
            id: 3,
            image: `${baseUrl}3.jpeg`,
            title: "Titre du slider 3",
            text: "text du slider 3",
        },
    ]

    return (
        <Carousel autoPlay interval={6000} infiniteLoop thumbWidth={100} showIndicators={false} showStatus={false}>
            {datas.map((slide) => (
                <div key={slide.id}>
                    <img src={slide.image} alt="" />
                    <div className="overlay">
                        <h2 className='overlay-title'>{slide.title}</h2>
                        <p className='overlay-text'>{slide.text}</p>
                    </div>
                </div>
            )

            )}
        </Carousel>
    );
};

export default Slider;