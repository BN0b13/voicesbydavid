import React, { useEffect, useState } from 'react';
import './App.css';

import Footer from './components/app/footer/footer.component';
import HamburgerMenu from './components/app/hamburger-menu/hamburger-menu.component';
import Header from './components/app/header/header.component';
import Spinner from './components/reusable/spinner/spinner.component';

import HomePage from './pages/home/home.pages';

import Client from './tools/client';
import { setMobileView } from './tools/mobileView';

import { viewTokenName } from './config';

import {
  AppLoadingContainer,
  ContentContainer,
  MainContainer
} from './App.styles';

const client = new Client();

function App() {
  const [ loading, setLoading ] = useState(true);
  

  useEffect(() => {
    const addView = async () => {
      await client.addView();
    }

    const viewAdded = sessionStorage.getItem(viewTokenName);

    console.log('View Added: ', viewAdded);

    if(viewAdded === null) {
      addView();
      sessionStorage.setItem(viewTokenName, true);
    }
    
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
            <HomePage />
          </ContentContainer>
        </div>
        <Footer />
      </>}
    </MainContainer>
  );
}

export default App;