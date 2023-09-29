import Button from '../reusable/button/button.component';

import {
    MainContainer,
    InfoLinksButton
} from './info-links.styles';

const InfoLinks = () => {

    return (
        <MainContainer>
            <InfoLinksButton onClick={() => window.location.href = '/#about'}>About Me</InfoLinksButton>
            <InfoLinksButton onClick={() => window.location.href = '/#contact'}>Contact Me</InfoLinksButton>
        </MainContainer>
    )
}

export default InfoLinks;