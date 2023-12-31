import styled from 'styled-components';

import {
    headerHeight
} from './styles/theme';

export const MainContainer = styled.div`

`;

export const AppLoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.9);
`;

export const ContentContainer = styled.div`
    padding-top: ${headerHeight};
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const WelcomePageBackSplash = styled.div`
    width: 100%;
`;

export const LinkContainer = styled.div`
    width: 100%;
`;