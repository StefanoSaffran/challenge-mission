import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.horizontal};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 113rem;
    width: 100%;
    display: flex;
    margin-top: 3rem;

    > form {
      height: 100%;
      width: min(100%, 60rem);
      margin: 3rem auto 0;

      > fieldset {
        border: 0;
        padding: 0 2.4rem;

        > legend {
          font: ${theme.fontSizes.huge} bold;
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
        padding: 6.4rem 2.4rem;

        > button {
          background: ${theme.colors.primaryLight};
          color: ${theme.colors.darkGrey};
          font-weight: 500;
          width: 100%;
          padding: 16px;
          margin: 0 auto;
          text-align: center;
          border-radius: ${theme.radii.default};
        }
      }
    }
  `}
`;
