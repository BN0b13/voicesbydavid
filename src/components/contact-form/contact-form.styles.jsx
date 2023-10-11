import styled from 'styled-components';

export const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 8vh 0 0 0;
    background-color: rgba(0,0,0,0.6);
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column; 
    margin: 30px 0;
`;

export const ContactFormInput = styled.input`
    width: 250px;
    margin-bottom: 15px;
`;

export const ContactFormTextArea = styled.textarea`
    height: 200px;
    width: 300px;
    margin-bottom: 20px;
`;