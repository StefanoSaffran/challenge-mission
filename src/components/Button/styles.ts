import styled, { css } from 'styled-components';

import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    padding: 0.8rem 2.4rem;
    border-radius: ${theme.radii.default};
    color: ${theme.colors.background};
    background-size: 200% 100%;
    background-position: 0 0;
    font-weight: 600;
    background-image: ${`linear-gradient(260deg,
      ${theme.colors.primaryLight},
      ${theme.colors.primaryDark},
      ${theme.colors.primaryLight})
      `};

    transition: ${theme.transition.default};
    * {
      transition: ${theme.transition.default};
    }

    :hover:not(:disabled) {
      background-position: -100% 0;
    }
  `}
`;
