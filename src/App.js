import React, { useContext, useEffect, useState } from 'react';
import './App.css';

import Footer from './components/app/footer/footer.component';
import HamburgerMenu from './components/app/hamburger-menu/hamburger-menu.component';
import Header from './components/app/header/header.component';
import Spinner from './components/reusable/spinner/spinner.component';

import HomePage from './pages/home/home.pages';

import { ConfigurationContext } from './contexts/configuration.context';

import Client from './tools/client';
import { setMobileView } from './tools/mobileView';

import { themeTokenName } from './config';

import backgroundImage from './assets/img/background.jpg';

import {
  AppLoadingContainer,
  ContentContainer,
  MainContainer
} from './App.styles';

const client = new Client();

function App() {
  const [ loading, setLoading ] = useState(false);

  const { theme, setAppTheme } = useContext(ConfigurationContext);

  useEffect(() => {
    const addView = async () => {
      await client.addView();
    }

    addView();

    const themeToken = localStorage.getItem(themeTokenName);

    if(themeToken) {
      const savedTheme =  JSON.parse(themeToken);
      setAppTheme(savedTheme, savedTheme.colors.primary);
    }

    const setAppContext = async () => {
      let currentTheme = {
        themeInverted: false
      };

      const getAppConfiguration = await client.configuration();

      const savedTheme = JSON.parse(themeToken);
      
      if(!savedTheme) {
        setLoading(true);
        const theme = getAppConfiguration.rows[0].Theme;
        const colors = currentTheme.themeInverted ? theme.colors.secondary : theme.colors.primary;
        setAppTheme(theme, colors);
        setLoading(false);
      } else {
        if(savedTheme.id != getAppConfiguration.rows[0].Theme.id || 
          savedTheme.updatedAt !== getAppConfiguration.rows[0].Theme.updatedAt) {
          setLoading(true);
          const theme = getAppConfiguration.rows[0].Theme;
          const colors = currentTheme.themeInverted ? theme.colors.secondary : theme.colors.primary;
          setAppTheme(theme, colors);
          setLoading(false);
        }
      }
    }

    setAppContext();
  }, []);

  

  return (
    <MainContainer id="outer-container" className="App" backgroundImage={backgroundImage}>
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
        <ContentContainer>
          <HomePage />
        </ContentContainer>
        <Footer />
      </>}
    </MainContainer>
  );
}

export default App;