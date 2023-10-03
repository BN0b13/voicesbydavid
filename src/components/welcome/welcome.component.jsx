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
          <WelcomeTitle>Welcome to the Versatile World of David Ilchert</WelcomeTitle>
          <WelcomeSubtitle>Professional Voice Over Artist</WelcomeSubtitle>
          <WelcomeText>Step into the captivating realm of voice artistry with David Ilchert, a seasoned voice actor whose passion and talent bring stories to life. With a specialization in narration, video games, animations, character voicing, and commercials, David's versatile vocal range knows no bounds. Whether you're crafting an epic adventure, breathing life into animated characters, or making your brand resonate, David's mastery of tone, emotion, and character will immerse your audience in a world of sonic wonder. Join us as we explore the limitless possibilities of voice, and let David Ilchert be the voice that tells your story, your way.</WelcomeText>
        </WelcomeTextContainer>
      </WelcomeOpacity>
    </WelcomeContainer>
  );
};

export default Welcome;