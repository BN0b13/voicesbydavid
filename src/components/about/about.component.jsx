import backgroundImage from '../../assets/img/about-background.jpg';
import aboutImage from '../../assets/img/about-image.png';

import { colors } from '../../assets/custom-theme';

import {
    AboutContainer,
    AboutImage,
    AboutOpacity,
    AboutText,
    AboutTextContainer,
    AboutTitle
} from './about.styles';

const About = () => {

    return (
        <AboutContainer theme={colors.primary} image={backgroundImage}>
            <AboutOpacity theme={colors.primary}>
                    <AboutImage src={aboutImage} />
                <AboutTextContainer theme={colors.primary}>
                    <AboutTitle>- About Me -</AboutTitle>
                    <AboutText>Please insert Bio here.</AboutText>
                </AboutTextContainer>
            </AboutOpacity>
        </AboutContainer>
    )
}

export default About;