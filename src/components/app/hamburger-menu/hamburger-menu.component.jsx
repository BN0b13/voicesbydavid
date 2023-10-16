import { useState } from 'react';
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
    MobileMenuText,
    Logo,
    LogoContainer,
    LogoLink,
} from './hamburger-menu.styles';

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);

    const handleIsOpen = () => {
        setOpen(!isOpen)
    }
    
    const closeSideBar = () => {
        setOpen(false);
    }

    const handleNavigation = (path) => {
        closeSideBar();

        window.location.href = path;
    }

    return (
        <Menu
            isOpen={isOpen}
            onOpen={handleIsOpen}
            onClose={handleIsOpen}
        >
            <MobileDropDownMenu>
                <LogoContainer>
                    <LogoLink onClick={() => handleNavigation('/#welcome')} >
                        <Logo src={navLogoMobile} />
                    </LogoLink>
                </LogoContainer>
            {menuItems.map((item, index) => {
                return (
                    <MobileDropDownMenuItem key={index} onClick={() => handleNavigation(item.path)}>
                            { item.icon }
                        <MobileDropDownMenuLink>
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