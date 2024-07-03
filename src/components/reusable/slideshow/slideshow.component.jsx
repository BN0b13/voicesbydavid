import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';

import { api } from '../../../config';

import defaultImg from '../../../assets/img/microphone.jpg';

import 'react-slideshow-image/dist/styles.css';

import {
  slideshowDimensions,
  slideshowSpanText
} from '../../../styles/theme';


const spanStyle = {
  padding: '20px',
  background: 'rgba(0,0,0,0.4)',
  color: '#fff',
  width: '100%',
  textAlign: 'center',
  fontSize: slideshowSpanText
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: slideshowDimensions
};

const Slideshow = ({ images }) => {
  const [ autoPlay, setAutoPlay ] = useState(false);
  
  useEffect(() => {
    if(images.length > 1) {
      setAutoPlay(true);
    }
  }, []);

    return (
      <div style={{ 'width': slideshowDimensions }}>
        {images.length === 0 ?
          <img src={defaultImg} alt='Default Home Page Image' style={{height: slideshowDimensions, width: slideshowDimensions, borderRadius: '3px'}} />
        :
          <Slide autoplay={autoPlay} arrows={autoPlay}>
              {images.map((image, index)=> (
                      <div key={index}>
                        {image.link ?
                          <a href={image.link}>
                              <div style={{ ...divStyle, "backgroundImage": `url(${api}${image.path}-mobile.webp)` }}>
                                {image.caption &&
                                  <span style={spanStyle}>{image.caption}</span>
                                }
                              </div>
                          </a>
                        :
                          <div style={{ ...divStyle, "backgroundImage": `url(${api}${image.path}-mobile.webp)` }}>
                            {image.caption &&
                              <span style={spanStyle}>{image.caption}</span>
                            }
                          </div>
                        }
                      </div>
                  ))}
          </Slide>
        }
      </div>
    )
}

export default Slideshow;