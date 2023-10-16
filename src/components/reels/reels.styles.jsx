import styled from 'styled-components';

import { setMobileView } from '../../tools/mobileView';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: rgba(241,241,241,0.7);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`;

export const ContentContainer = styled.div`
    margin: 8vh 0;
    min-height: 425px;
`;


export const TabContainer = styled.div`
    display: flex;
    flex-direction: ${setMobileView() ? 'column' : 'row'};
    justify-content: space-around;
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    width: 100%;
`;

export const MainTitle = styled.h2`
    text-align: center;
`;

export const TabSelector = styled.button`
    background-color: ${props => props.active ? '#ccc' : 'inherit'};
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    width: 100%;
    font-size: ${setMobileView() ? '1rem' : '1.5rem'};
    font-weight: bold;

    :hover {
        background-color: ${props => props.active ? '#ccc' :'#ddd'};
    }
`;