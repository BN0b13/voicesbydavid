import { useContext } from 'react';

import { menuItems } from '../../../../assets/menu-items';

import { ConfigurationContext } from '../../../../contexts/configuration.context';

import {
    NavigationContainer,
    HeaderLink
} from './navigation.styles';

const Navigation = () => {
    const { colors } = useContext(ConfigurationContext);

    return (
        <NavigationContainer theme={colors}>
            {menuItems.map((item, index) => {
                return (
                    <HeaderLink key={index} theme={colors} href={item.path}>
                        { item.title }
                    </HeaderLink>
                );
            })}
        </NavigationContainer>
    )
}

export default Navigation;