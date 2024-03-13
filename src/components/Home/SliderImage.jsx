import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slider.css';

const SliderImage = () => {
    return (
        <div className="slider-container">
            <h2 className="label-left">Before</h2>
            <h2 className="label-right">After</h2>
            <Carousel
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                infiniteLoop={true}
                swipeable={true}
                emulateTouch={true}
            >
                <div>
                    <img src="image1-url.jpg" alt="Before" />
                </div>
                <div>
                    <img src="image2-url.jpg" alt="After" />
                </div>
            </Carousel>
        </div>
    );
}

export default SliderImage;
