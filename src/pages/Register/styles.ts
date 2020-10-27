import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
      background: ${theme.colors.background};
      height: fit-content;
      width: min(100%, 60rem);
      margin: 0 auto;
      border-radius: ${theme.radii.default};
      box-shadow: ${theme.shadows.default};
      padding: 2.4rem;

      > fieldset {
        border: 0;
        padding: 0 2.4rem;

        > legend {
          font: 3.2rem bold;
          width: 100%;
          margin-bottom: ${theme.spacing.default};
          padding-bottom: ${theme.spacing.default};
          border-bottom: 1px solid ${theme.colors.primaryLight};
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        legend + div {
          margin-top: 1rem;
        }
      }

      > div {
        width: 100%;
        padding: 3.2rem 2.4rem 0;

        > button {
          width: 100%;
          padding: 1.2rem;
        }
      }
    }

    @media (max-width: 670px) {
      margin: 0;
      width: 100%;
    }
  `}
`;
