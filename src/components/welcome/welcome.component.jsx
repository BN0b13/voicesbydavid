import Slideshow from '../reusable/slideshow/slideshow.component';

import backSplash from '../../assets/img/back-splash.jpg';

import { colors } from '../../assets/custom-theme';

import {
  WelcomeContainer,
  WelcomeImageContainer,
  WelcomeOpacity,
  WelcomeSubtitle,
  WelcomeText,
  WelcomeTextContainer,
  WelcomeTitle
} from './welcome.styles';

const Welcome = ({ welcome }) => {
  const images = welcome.SectionImages.sort((a, b) => a.position - b.position);

  console.log('WELCOME Images: ', images);

  return (
    <WelcomeContainer theme={colors.primary} image={backSplash}>
      <WelcomeOpacity theme={colors.primary}>
          {welcome &&
            <>
              {welcome.imagesOn && 
                <WelcomeImageContainer>
                  <Slideshow images={images} />
                </WelcomeImageContainer>
              }
              <WelcomeTextContainer theme={colors.primary}>
                {welcome.titleOn && <WelcomeTitle>{ welcome.title }</WelcomeTitle>}
                {welcome.subtitleOn && <WelcomeSubtitle>{ welcome.subtitle }</WelcomeSubtitle>}
                {welcome.paragraphOn && <WelcomeText>{ welcome.paragraph }</WelcomeText>}
              </WelcomeTextContainer>
            </>
          }
      </WelcomeOpacity>
    </WelcomeContainer>
  );
};

export default Welcome;