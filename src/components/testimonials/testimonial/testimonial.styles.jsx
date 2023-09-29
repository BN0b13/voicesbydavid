import styled from 'styled-components';

import { setMobileView } from '../../../tools/mobileView';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 10px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    width: ${setMobileView() ? '80%' : '60%'};
`;

export const PictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 70%;
    padding: 10px 20px;
`;

export const TestimonialImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
`;