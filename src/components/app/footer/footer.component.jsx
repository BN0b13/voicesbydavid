import { useContext } from 'react';

import {
  FaInstagram
} from 'react-icons/fa';
import { setMobileView } from '../../../tools/mobileView';

import { ConfigurationContext } from '../../../contexts/configuration.context';

import {
  DisclaimerContainer,
  DisclaimerText,
  FooterContainer,
  FooterText,
  IconContainer,
  MainContainer,
} from './footer.styles';

const Footer = () => {
  const { colors } = useContext(ConfigurationContext);

  return (
  <MainContainer theme={colors}>
    <IconContainer onClick={() => window.location.href = 'https://www.instagram.com'}>
      <FaInstagram size={setMobileView() ? '14' : '28'} />
    </IconContainer>
    <FooterContainer>
      <FooterText>Copyright ©2023 Voices By David</FooterText>
    </FooterContainer>
  </MainContainer>
)};

export default Footer;