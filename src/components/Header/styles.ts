import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 1.6rem;

  max-width: 116.2rem;
  width: 100%;
  height: 10.4rem;
`;

export const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 700;

  > svg {
    cursor: pointer;
    width: max(8rem, min(12.4rem, 22vw));
    height: max(4rem, min(5rem, 25vw));

    rect {
      fill: transparent;
    }

    path {
      fill: ${({ theme }) => theme.colors.primaryLight};
    }
  }
`;

export const RightNav = styled.div`
  width: min(30rem, 40vw);
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-left: 1.6rem;
  }
`;
