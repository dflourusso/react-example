import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 210px auto;
  grid-template-rows: 55px auto 45px;
  
  grid-template-areas:
    'LOGO NAVBAR'
    'SIDEBAR CONTENT'
    'SIDEBAR FOOTER';

  height: 100vh;  
`;
