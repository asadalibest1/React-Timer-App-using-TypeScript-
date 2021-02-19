import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import image1 from '../../images/slide-image-1.jpg';  
import image3 from '../../images/slide-image-2.png';  
import image4 from '../../images/slide-image-3.jpg';  

export default function Slider(){
    return (
        <div className="slide-container">
          <Slide>
            <div className="each-fade">
              <div className="image-container">
                <img alt="shoe-store" style={{ height: "70vh", width: "100%" }} src={image1} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img alt="shoe-store" style={{ height: "70vh", width: "100%" }} src={image3} />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img alt="shoe-store" style={{ height: "70vh", width: "100%" }} src={image4} />
              </div>
            </div>
          </Slide>
        </div>
      )
    }