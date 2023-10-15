import backgroundImage from '../../assets/img/about-background.jpg';

import { api } from '../../config';

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

const About = ({ about }) => (
    <AboutContainer theme={colors.primary} image={backgroundImage}>
        <AboutOpacity theme={colors.primary}>
                {about.imagesOn && about.SectionImages.length > 0 && <AboutImage src={api + about.SectionImages[0].path} />}
            <AboutTextContainer theme={colors.primary}>
                {about.titleOn && <AboutTitle>{ about.title }</AboutTitle>}
                {about.subtitleOn && <AboutSubtitle>{ about.subtitle }</AboutSubtitle>}
                {about.paragraphOn && <AboutText>{ about.paragraph }</AboutText>}
            </AboutTextContainer>
        </AboutOpacity>
    </AboutContainer>
);

export default About;