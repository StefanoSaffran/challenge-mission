import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;
  height: 6.4rem;
  align-self: flex-start;
  position: absolute;
  top: 100%;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.primaryLight} 0%, ${theme.colors.primaryDark} 100%);`};
`;
