import {
  FaInstagram
} from 'react-icons/fa';
import { setMobileView } from '../../../tools/mobileView';

import { colors } from '../../../assets/custom-theme';

import {
  FooterContainer,
  FooterText,
  IconContainer,
  MainContainer,
} from './footer.styles';

const Footer = () => {

  return (
  <MainContainer theme={colors.primary}>
    <IconContainer onClick={() => window.location.href = 'https://www.instagram.com'}>
      <FaInstagram size={setMobileView() ? '14' : '28'} />
    </IconContainer>
    <FooterContainer>
      <FooterText>Copyright ©2023 Voices By David</FooterText>
    </FooterContainer>
  </MainContainer>
)};

export default Footer;