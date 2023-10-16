import { useEffect, useState } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

import { setMobileView } from '../../../tools/mobileView';

import { colors } from '../../../assets/custom-theme';

import {
  FooterContainer,
  FooterText,
  IconContainer,
  IconsContainer,
  MainContainer,
} from './footer.styles';

const Footer = ({ socialMedia }) => {

  return (
  <MainContainer theme={colors.primary}>
    <IconsContainer>
      {socialMedia.facebook.active && 
        <IconContainer>
          <FaFacebook size='28' onClick={() => window.location.href = socialMedia.facebook.url} />
        </IconContainer> 
      }
      {socialMedia.instagram.active && 
        <IconContainer>
          <FaInstagram size='28' onClick={() => window.location.href = socialMedia.instagram.url} />
        </IconContainer>
      }
      {socialMedia.twitter.active &&
        <IconContainer>
          <FaTwitter size='28' onClick={() => window.location.href = socialMedia.twitter.url} />
        </IconContainer>
      }
      {socialMedia.youtube.active &&
        <IconContainer>
          <FaYoutube size='28' onClick={() => window.location.href = socialMedia.youtube.url} />
        </IconContainer>
      }
    </IconsContainer>
    <FooterContainer>
      <FooterText>Copyright ©2023 Voices By David</FooterText>
    </FooterContainer>
  </MainContainer>
)};

export default Footer;