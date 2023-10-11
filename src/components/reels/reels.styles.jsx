import styled from 'styled-components';

import { setMobileView } from '../../tools/mobileView';

export const MainContainer = styled.div`
    margin: 8vh auto 0 auto;
    overflow: hidden;
    max-width: ${setMobileView() ? '280px' : '700px'};
`;