import styled, { css } from 'styled-components';

export const Container = styled.tr`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.primaryLight};

    td {
      padding: 1.2rem;

      &:nth-child(2),
      &:nth-child(3) {
        text-align: center;
      }

      &:nth-child(3) {
        width: 30%;
      }

      &:last-child {
        width: 5%;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        border: 1px solid ${theme.colors.primaryLight};
        border-radius: 0.3rem;
        color: ${theme.colors.darkGrey};
        padding: 0.3rem;
        width: 5rem;
        text-align: center;
      }
    }

    button {
      background: none;
      border: 0;
      padding: 6px 8px;

      svg {
        width: 2rem;
        height: 2rem;

        &:hover {
          fill: ${theme.colors.primary};
        }
      }
    }

    @media (max-width: 356px) {
      td {
        &:nth-child(3) {
          flex: 1;
          div {
            justify-content: flex-start;
          }
        }
      }
    }

    @media (max-width: 640px) {
      flex-wrap: nowrap;

      td {
        padding: 1.2rem 0;
      }
    }
  `}
`;
