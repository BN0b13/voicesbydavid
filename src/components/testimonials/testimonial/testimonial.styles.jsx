import styled from 'styled-components';

import { setMobileView } from '../../../tools/mobileView';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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

export const PictureTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 70%;
    padding: 10px 20px;
`;

export const TextOnlyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
`;

export const TextOnlyContainerCenter = styled.div`
    display: flex;
    flex-direction: column;
    text-algin: center;
    width: 100%;
    margin: 10px 0;
`;

export const TextOnlyContainerStart = styled.div`
    display: flex;
    flex-direction: column;
    text-algin: start;
    width: 100%;
`;

export const TextOnlyContainerEnd = styled.div`
    display: flex;
    flex-direction: column;
    text-align: end;
    width: 100%;
`;

export const TestimonialImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 50%;
`;