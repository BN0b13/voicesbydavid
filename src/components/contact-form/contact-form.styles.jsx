import styled from 'styled-components';

export const ContactFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 8vh auto 0 auto;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column; 
    margin: 30px 0;
`;

export const ContactFormInput = styled.input`
    margin-bottom: 15px;
`;

export const ContactFormTextArea = styled.textarea`
    height: 200px;
    width: 300px;
`;