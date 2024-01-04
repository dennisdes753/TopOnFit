import React from 'react';
import Slider from "react-slick";
import {Image} from 'react-bootstrap';
import { Experience1, Experience2, Experience3, Experience4, Experience5, Experience6, Experience7 } from '../../../asset/img';

import './slider.scss';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const ExperienceSlider = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
  return (
    <>
          <Slider {...settings}>
              <div className="item">
                  <Image className="img-fluid" src={Experience1} alt="Slider_Image_1"/>
              </div>
              <div className="item">
                  <Image className="img-fluid" src={Experience2} alt="Slider_Image_2" />
              </div>
              <div className="item">
                  <Image className="img-fluid" src={Experience3} alt="Slider_Image_3" />
              </div>
              <div className="item">
                  <Image className="img-fluid" src={Experience4} alt="Slider_Image_4" />
              </div>
              <div className="item">
                  <Image className="img-fluid" src={Experience5} alt="Slider_Image_5" />
              </div>
              <div className="item">
                  <Image className="img-fluid" src={Experience6} alt="Slider_Image_6" />
              </div>
              <div className="item">
                  <Image className="img-fluid" src={Experience7} alt="Slider_Image_7" />
              </div>
        </Slider>
    </>
  )
}

export default ExperienceSlider;