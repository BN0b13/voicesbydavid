import { useContext, useEffect, useState } from 'react';

import Slideshow from '../reusable/slideshow/slideshow.component';
import Spinner from '../reusable/spinner/spinner.component';

import { ConfigurationContext } from '../../contexts/configuration.context';

import Client from '../../tools/client';

import backSplash from '../../assets/img/back-splash.jpg';

import {
  WelcomeContainer,
  WelcomeImageContainer,
  WelcomeOpacity,
  WelcomeSubtitle,
  WelcomeText,
  WelcomeTextContainer,
  WelcomeTitle
} from './welcome.styles';

const client = new Client();

const Welcome = () => {
  const [ images, setImages ] = useState(null);

  const { colors } = useContext(ConfigurationContext);

    useEffect(() => {
        const getImages = async () => {
            const res = await client.getWelcomeImages();

            res.rows.sort((a, b) => a.position - b.position);

            setImages(res.rows);
        }

        getImages();
    }, []);

  return (
    <WelcomeContainer theme={colors} image={backSplash}>
      <WelcomeOpacity theme={colors}>
        <WelcomeImageContainer>
          {!images ?
              <Spinner />
            :
              <Slideshow images={images} />
          }
        </WelcomeImageContainer>
        <WelcomeTextContainer theme={colors}>
          <WelcomeTitle>David Ilchert</WelcomeTitle>
          <WelcomeSubtitle>Voice Acting Expert</WelcomeSubtitle>
          <WelcomeText>Welcome to my portfolio! Now accepting voice acting opportunities. Inquire below.</WelcomeText>
        </WelcomeTextContainer>
      </WelcomeOpacity>
    </WelcomeContainer>
  );
};

export default Welcome;