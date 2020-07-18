import styled from 'styled-components';

export const Container = styled.div`
  grid-area: NAVBAR;
  display: flex;
  background-color: var(--background-dark);
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  color: var(--text);
  font-weight: 300;
  font-size: 20px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img.attrs(() => ({
  src: 'https://avatars0.githubusercontent.com/u/5544901?s=460&u=56e18a7857cc06c8a81fea7c53c56d582e81b1be&v=4',
  alt: 'User avatar',
}))`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  color: var(--text);
  font-size: 18px;
  margin: 0 10px;
`;
