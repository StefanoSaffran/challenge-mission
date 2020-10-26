import styled, { css } from 'styled-components';

interface IBadgeProps {
  hasProducts: number;
}

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
  width: max(22rem, min(35rem, 42vw));
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
  }
`;

export const Badge = styled.button<IBadgeProps>`
  ${({ theme }) => css`
    position: relative;
    background: none;
    margin: 1.6rem 0 0 1.6rem;

    svg {
      stroke: ${theme.colors.lightGrey};
    }

    sup {
      display: none;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.primary};
      position: absolute;
      width: 1.8rem;
      height: 1.8rem;
      right: -0.8rem;
      top: -0.4rem;
      border-radius: 50%;
      visibility: hidden;
      transition: all 0.5s;
    }
  `}

  ${({ hasProducts }) =>
    hasProducts &&
    css`
      sup {
        visibility: visible;
        display: flex;
      }
    `}
`;
