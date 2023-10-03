import { menuItems } from '../../../../assets/menu-items';

import { colors } from '../../../../assets/custom-theme';
import {
    NavigationContainer,
    HeaderLink
} from './navigation.styles';

const Navigation = () => {

    return (
        <NavigationContainer theme={colors.primary}>
            {menuItems.map((item, index) => {
                return (
                    <HeaderLink key={index} theme={colors.primary} href={item.path}>
                        { item.title }
                    </HeaderLink>
                );
            })}
        </NavigationContainer>
    )
}

export default Navigation;