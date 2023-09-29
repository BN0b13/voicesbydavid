import { useContext } from 'react';

import Navigation from './navigation/navigation.component';

import { setMobileView } from '../../../tools/mobileView';

import { ConfigurationContext } from '../../../contexts/configuration.context';

import navLogo from '../../../assets/img/text.png';

import {
  HeaderNav,
  MobileHeaderNav,
  Logo,
  LogoContainer,
  LogoLink,
  NavOptionsDiv
} from './header.styles';

const Header = () => {
  const { colors } = useContext(ConfigurationContext);

  if(setMobileView()) {
    return (
      <MobileHeaderNav theme={colors} />
    )
  }

  return (
    <HeaderNav theme={colors}>
      <LogoContainer>
        <LogoLink onClick={() => window.location = '/'} >
          <Logo theme={colors} src={navLogo} />
        </LogoLink>
      </LogoContainer>
      <NavOptionsDiv>
        <Navigation />
      </NavOptionsDiv>
    </HeaderNav>
  );
};

export default Header;