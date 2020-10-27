import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.horizontal};
  z-index: 2;
`;

export const Wrapper = styled.div`
  max-width: 113rem;
  width: 100%;
  display: flex;
  margin-top: 3rem;
`;
