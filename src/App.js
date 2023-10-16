import React, { useEffect, useState } from 'react';
import './App.css';

import Footer from './components/app/footer/footer.component';
import HamburgerMenu from './components/app/hamburger-menu/hamburger-menu.component';
import Header from './components/app/header/header.component';
import Spinner from './components/reusable/spinner/spinner.component';
import About from './components/about/about.component';
import ContactForm from './components/contact-form/contact-form.component';
import InfoLinks from './components/info-links/info-links.components';
import Reels from './components/reels/reels.component';
import Testimonials from './components/testimonials/testimonials.component';
import Welcome from './components/welcome/welcome.component';

import Client from './tools/client';
import { setMobileView } from './tools/mobileView';

import { viewTokenName } from './config';

import {
  AppLoadingContainer,
  ContentContainer,
  WelcomePageBackSplash,
  LinkContainer,
  MainContainer
} from './App.styles';

const client = new Client();

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ socialMedia, setSocialMedia ] = useState('');
  const [ aboutSection, setAboutSection ] = useState('');
  const [ reelCategories, setReelCategories ] = useState('');
  const [ testimonialSection, setTestimonialSection] = useState('');
  const [ welcomeSection, setWelcomeSection ] = useState('');
  

  useEffect(() => {
    const addView = async () => {
      await client.addView();
    }

    const viewAdded = sessionStorage.getItem(viewTokenName);

    if(viewAdded === null) {
      addView();
      sessionStorage.setItem(viewTokenName, true);
    }

    getContent();
  }, []);

  const getContent = async () => {
    await getSocialMedia();
    await getAboutSection();
    await getCategories();
    await getTestimonialSection();
    await getWelcomeSection();
    
    setLoading(false);
  }

  const getSocialMedia = async () => {
    const getSocialMedia = await client.socialMedia();

    setSocialMedia(getSocialMedia);
  }

  const getAboutSection = async () => {
    const getAboutSection = await client.getAboutSection();
    setAboutSection(getAboutSection.rows[0]);
  }

  const getCategories = async () => {
    const res = await client.getCategories();

    setReelCategories(res.rows);
  }

  const getTestimonialSection = async () => {
    const getTestimonials = await client.getTestimonials();
    getTestimonials.rows.sort((a, b) => a.position - b.position);
    setTestimonialSection(getTestimonials.rows);
  }

  const getWelcomeSection = async () => {
    const getWelcomeSection = await client.getWelcomeSection();
    setWelcomeSection(getWelcomeSection.rows[0]);
  }

  return (
    <MainContainer id="outer-container" className="App">
      {loading ?
        <AppLoadingContainer>
          <Spinner />
        </AppLoadingContainer>
      :
        <>
        {setMobileView() &&
          <HamburgerMenu />
        }
        <Header />
        <div id="page-wrap">
          <ContentContainer id='welcome'>
            <WelcomePageBackSplash />
              <Welcome welcome={welcomeSection} />
            {/* <InfoLinks /> */}
            <LinkContainer>
                <Reels reelCategories={reelCategories} />
            </LinkContainer>
            <LinkContainer id='testimonials'>
                <Testimonials testimonials={testimonialSection} />
            </LinkContainer>
            <LinkContainer id='about'>
                <About about={aboutSection} />
            </LinkContainer>
            <LinkContainer id='contact'>
                <ContactForm />
            </LinkContainer>
          </ContentContainer>
        </div>
        <Footer socialMedia={socialMedia} />
      </>}
    </MainContainer>
  );
}

export default App;