import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.table`
  ${({ theme }) => css`
    width: min(100%, 60rem);
    border-collapse: separate;
    border-spacing: 0 0.1rem;
    background: ${theme.colors.backgroundAlternative};
    padding: 0.5rem;
    border: 1px solid ${theme.colors.backgroundAlternative};
    border-radius: ${theme.radii.default};
    margin: 0 auto;

    thead {
      th {
        text-align: start;
        padding: ${theme.spacing.default};
      }

      th:first-child {
        flex: 1;
        padding-left: 0.8rem;
      }

      th:nth-child(2) {
        width: 20%;
      }

      th:last-child {
        width: 5%;
        /* width: max(12rem, min(18rem, 23vw)); */
      }
    }

    tbody {
      background: ${theme.colors.background};

      tr {
        height: 57px;
        border-radius: ${theme.radii.small};

        td:first-child {
          padding-left: 0.8rem;
        }
      }

      button {
        background: transparent;
        color: ${theme.colors.primaryLight};

        svg {
          fill: ${theme.colors.primaryLight};
        }
      }
    }

    @media (max-width: 670px) {
      flex-direction: column;
      margin: 0;
      width: 100%;
    }
  `}
`;
