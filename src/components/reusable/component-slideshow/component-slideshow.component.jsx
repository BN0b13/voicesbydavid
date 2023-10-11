import React, { useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import ProductCard from '../../product-card/product-card.component';

import { setMobileView, setTabletView } from '../../../tools/mobileView';

import {
  Content,
  ContentContainer,
  ContentLink,
  MainContainer
} from './component-slideshow.styles';

const ComponentSlideshow = ({ products, categories }) => {
  const mainViewAmount = setTabletView() ? 2 : 3;
  const amountDisplayed = setMobileView() ? 1 : mainViewAmount;
  const [ autoPlay, setAutoPlay ] = useState(true);
  const [ productArray, setProductArray ] = useState([]);
  
  useEffect(() => {
    createSlideShowArray();
    if(productArray.length === 1) {
      setAutoPlay(false);
    }
    
  }, []);

    return (
      <MainContainer>
        <Slide autoplay={autoPlay} arrows={autoPlay} duration={5000}>
            {productArray.map((productGroup, index)=> (
              <ContentContainer key={index}>
                {productGroup.current.map((product, index) => (
                  <Content key={index}>
                    <ContentLink href={`/shop/${product.category}/${product.name}`}>
                      <ProductCard product={product} />
                    </ContentLink>
                  </Content>
                ))}
            </ContentContainer>
            ))}
        </Slide>
      </MainContainer>
    )
}

export default ComponentSlideshow;