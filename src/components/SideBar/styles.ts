import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 20.4rem;
  display: flex;
  flex: 1 100%;
  flex-direction: column;
  margin-right: 2.4rem;

  @media (max-width: 670px) {
    max-width: 100%;
    margin: 0 0 1.6rem;
    flex: 0 0%;
  }
`;

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    width: 100%;
    height: fit-content;
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    padding: 2.4rem;
    display: flex;
    justify-content: space-around;

    h2,
    h4 {
      margin-bottom: ${theme.spacing.default};
      border-bottom: 1px solid ${theme.colors.primaryLight};
    }

    h4 {
      margin-top: ${theme.spacing.default};
    }

    a {
      color: ${theme.colors.primaryDark};
    }

    @media (min-width: 670px) {
      flex-direction: column;
    }

    @media (max-width: 670px) {
      h2,
      h4,
      span {
        display: none;
      }
    }
  `}
`;
