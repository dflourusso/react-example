import styled from 'styled-components';
import { ArrowRight } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: SIDEBAR;
  display: flex;
  flex-direction: column;
  background-color: var(--background-dark);
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  transition: background-color 0.2s;
  font-weight: 300;
  :hover {
    background-color: var(--background);
    cursor: pointer;
  }  
`;

export const ArrowIcon = styled(ArrowRight)`
  color: var(--text);
  width: 20px;
  height: 20px;
`;

export const Label = styled.span`
  color: var(--text);
  font-size: 18px;
`;

export const Divider = styled.div`
  background-color: var(--text);
  width: 90%;
  height: 1px;
  opacity: 0.2;
`;
