import backgroundImage from '../../assets/img/about-background.jpg';
import aboutImage from '../../assets/img/about-image.png';

import { colors } from '../../assets/custom-theme';

import {
    AboutContainer,
    AboutImage,
    AboutOpacity,
    AboutSubtitle,
    AboutText,
    AboutTextContainer,
    AboutTitle
} from './about.styles';

const About = ({ about }) => {

    return (
        <AboutContainer theme={colors.primary} image={backgroundImage}>
            <AboutOpacity theme={colors.primary}>
                    {about.imagesOn && <AboutImage src={aboutImage} />}
                <AboutTextContainer theme={colors.primary}>
                    {about.titleOn && <AboutTitle>{ about.title }</AboutTitle>}
                    {about.subtitleOn && <AboutSubtitle>{ about.subtitle }</AboutSubtitle>}
                    {about.paragraphOn && <AboutText>{ about.paragraph }</AboutText>}
                </AboutTextContainer>
            </AboutOpacity>
        </AboutContainer>
    )
}

export default About;