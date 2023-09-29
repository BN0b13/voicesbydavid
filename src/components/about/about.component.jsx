import { useContext } from 'react';

import Button from '../reusable/button/button.component';

import { ConfigurationContext } from '../../contexts/configuration.context';

import backgroundImage from '../../assets/img/about-background.jpg';
import aboutImage from '../../assets/img/about-image.png';

import {
    AboutContainer,
    AboutImage,
    AboutOpacity,
    AboutText,
    AboutTextContainer,
    AboutTitle
} from './about.styles';

const About = () => {
    const { colors } = useContext(ConfigurationContext);

    return (
        <AboutContainer theme={colors} image={backgroundImage}>
            <AboutOpacity theme={colors}>
                    <AboutImage src={aboutImage} />
                <AboutTextContainer theme={colors}>
                    <AboutTitle>- About Me -</AboutTitle>
                    <AboutText>Please insert Bio here.</AboutText>
                </AboutTextContainer>
            </AboutOpacity>
        </AboutContainer>
    )
}

export default About;