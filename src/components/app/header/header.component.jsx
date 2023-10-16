import Navigation from './navigation/navigation.component';

import { setMobileView } from '../../../tools/mobileView';

import navLogo from '../../../assets/img/text.png';

import { colors } from '../../../assets/custom-theme';

import {
  HeaderNav,
  MobileHeaderNav,
  Logo,
  LogoContainer,
  LogoLink,
  NavOptionsDiv
} from './header.styles';

const Header = () => {
  if(setMobileView()) {
    return (
      <MobileHeaderNav theme={colors.primary} />
    )
  }

  return (
    <HeaderNav theme={colors.primary}>
      <LogoContainer>
        <LogoLink onClick={() => window.location = '/#welcome'} >
          <Logo theme={colors.primary} src={navLogo} />
        </LogoLink>
      </LogoContainer>
      <NavOptionsDiv>
        <Navigation />
      </NavOptionsDiv>
    </HeaderNav>
  );
};

export default Header;