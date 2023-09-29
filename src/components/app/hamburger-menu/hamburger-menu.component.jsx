import { slide as Menu } from 'react-burger-menu';

import navLogoMobile from '../../../assets/img/logo-hamburger-menu.png';

import { menuItems } from '../../../assets/menu-items';

import './hamburger-menu.css';

import {
    HeaderLink,
    MobileDropDownMenu,
    MobileDropDownMenuItem,
    MobileDropDownMenuLastItem,
    MobileDropDownMenuLink,
    Logo,
    LogoContainer,
    LogoLink,
} from './hamburger-menu.styles';

const HamburgerMenu = props => {

    return (
        <Menu>
            <MobileDropDownMenu>
                <LogoContainer>
                    <LogoLink onClick={() => window.location = '/'} >
                        <Logo src={navLogoMobile} />
                    </LogoLink>
                </LogoContainer>
            {menuItems.map((item, index) => {
                return (
                    <MobileDropDownMenuItem key={index}>
                            { item.icon }
                        <MobileDropDownMenuLink href={item.path}>
                            { item.title }
                        </MobileDropDownMenuLink>
                    </MobileDropDownMenuItem>
                );
            })}
            </MobileDropDownMenu>
        </Menu>
    
    );
  }

  export default HamburgerMenu;