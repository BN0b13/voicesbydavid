import { useState } from 'react'
import ReactPlayer from 'react-player';

import { setMobileView } from '../../tools/mobileView';

import {
    ContentContainer,
    MainContainer,
    MainTitle,
    TabContainer,
    TabSelector
} from './reels.styles';

const Reels = ({ reelCategories }) => {
    const [ currentTab, setCurrentTab ] = useState(1);
    const [ tabOneActive, setTabOneActive ] = useState(true);
    const [ tabTwoActive, setTabTwoActive ] = useState(false);
    const [ tabThreeActive, setTabThreeActive ] = useState(false);
    const [ tabFourActive, setTabFourActive ] = useState(false);
    const [ tabFiveActive, setTabFiveActive ] = useState(false);

    const reelsDisplay = (categoryName) => {
        const filteredCategories = reelCategories.filter(category => category.name === categoryName);
        const filteredReels = filteredCategories[0].Reels.filter(reel => reel.active);
        return (
            <>
                {filteredReels.length > 0 ?
                    filteredReels.map((reel, index) => (
                        <ContentContainer key={index}>
                            <ReactPlayer
                                url={reel.url}
                                width={setMobileView() ? '300px' : '700px'}
                            />
                        </ContentContainer>))
                    :
                        <ContentContainer>
                            <MainTitle>No Reels In Category</MainTitle>
                        </ContentContainer>
                }
            </>
        )
    }
    
    const activateTabOne = () => {
        setCurrentTab(1);
        setTabOneActive(true);
        setTabTwoActive(false);
        setTabThreeActive(false);
        setTabFourActive(false);
        setTabFiveActive(false);
    }

    const activateTabTwo = () => {
        setCurrentTab(2);
        setTabOneActive(false);
        setTabTwoActive(true);
        setTabThreeActive(false);
        setTabFourActive(false);
        setTabFiveActive(false);
    }

    const activateTabThree = () => {
        setCurrentTab(3);
        setTabOneActive(false);
        setTabTwoActive(false);
        setTabThreeActive(true);
        setTabFourActive(false);
        setTabFiveActive(false);
    }

    const activateTabFour = () => {
        setCurrentTab(4);
        setTabOneActive(false);
        setTabTwoActive(false);
        setTabThreeActive(false);
        setTabFourActive(true);
        setTabFiveActive(false);
    }

    const activateTabFive = () => {
        setCurrentTab(5);
        setTabOneActive(false);
        setTabTwoActive(false);
        setTabThreeActive(false);
        setTabFourActive(false);
        setTabFiveActive(true);
    }

    const showCurrentTab = () => {
        if(currentTab === 2) {
            return (reelsDisplay('Audio Books'))
        }

        if(currentTab === 3) {
            return (reelsDisplay('Animations'))
        }

        if(currentTab === 4) {
            return (reelsDisplay('Character Voicing'))
        }

        if(currentTab === 5) {
            return (reelsDisplay('Commercials'))
        }

        return (reelsDisplay('Narration'));
    }


    return (
        <MainContainer>
            <TabContainer>
                <TabSelector active={tabOneActive} onClick={() => activateTabOne()}>Narration</TabSelector>
                <TabSelector active={tabTwoActive} onClick={() => activateTabTwo()}>Audio Books</TabSelector>
                <TabSelector active={tabThreeActive} onClick={() => activateTabThree()}>Animations</TabSelector>
                <TabSelector active={tabFourActive} onClick={() => activateTabFour()}>Character Voicing</TabSelector>
                <TabSelector active={tabFiveActive} onClick={() => activateTabFive()}>Commercials</TabSelector>
            </TabContainer>
            <>
                { showCurrentTab() }
            </>
        </MainContainer>
    )
}

export default Reels;