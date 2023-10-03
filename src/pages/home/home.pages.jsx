import About from '../../components/about/about.component';
import ContactForm from '../../components/contact-form/contact-form.component';
import InfoLinks from '../../components/info-links/info-links.components';
import Reels from '../../components/reels/reels.component';
import Testimonials from '../../components/testimonials/testimonials.component';
import Welcome from '../../components/welcome/welcome.component';

import Client from '../../tools/client';

import {
    HomePageContainer,
    LinkContainer,
    WelcomePageBackSplash
} from './home.styles';

const client = new Client();

const HomePage = () => {
    const reelUrls = ['https://www.youtube.com/embed/H_JgrhvYNCM'];

    return (
        <HomePageContainer>
            <WelcomePageBackSplash />
            <Welcome />
            <InfoLinks />
            <LinkContainer  id="reels">
                <Reels reels={reelUrls} />
            </LinkContainer>
            <LinkContainer id="testimonials">
                <Testimonials />
            </LinkContainer>
            <LinkContainer id="about">
                <About />
            </LinkContainer>
            <LinkContainer id="contact">
                <ContactForm />
            </LinkContainer>
        </HomePageContainer>
    );
};

export default HomePage;