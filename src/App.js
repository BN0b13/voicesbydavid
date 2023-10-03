import React, { useEffect, useState } from 'react';
import './App.css';

import Footer from './components/app/footer/footer.component';
import HamburgerMenu from './components/app/hamburger-menu/hamburger-menu.component';
import Header from './components/app/header/header.component';
import Spinner from './components/reusable/spinner/spinner.component';

import HomePage from './pages/home/home.pages';

import Client from './tools/client';
import { setMobileView } from './tools/mobileView';

import { themeTokenName } from './config';

import {
  AppLoadingContainer,
  ContentContainer,
  MainContainer
} from './App.styles';

const client = new Client();

function App() {
  const [ loading, setLoading ] = useState(true);
  const [ images, setImages ] = useState(null);

  useEffect(() => {
    const addView = async () => {
      await client.addView();
    }

    const getImages = async () => {
      const res = await client.getWelcomeImages();

      res.rows.sort((a, b) => a.position - b.position);

      setImages(res.rows);
    }

    addView();
    getImages();
    setLoading(false);
  }, []);

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
          <ContentContainer>
            <HomePage images={images} />
          </ContentContainer>
        </div>
        <Footer />
      </>}
    </MainContainer>
  );
}

export default App;