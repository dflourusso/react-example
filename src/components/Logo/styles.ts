import styled from 'styled-components';
import Logo from '../../logo.svg'

export const Container = styled.div`
  grid-area: LOGO;
  display: flex;
  background-color: var(--background-dark);
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const Image = styled.img.attrs(() => ({
  src: Logo,
  alt: 'Logo',
}))`
  width: 50px;
  height: 50px;
`;

export const Label = styled.span`
  color: var(--text);
  font-size: 25px;
`;
