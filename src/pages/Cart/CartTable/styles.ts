import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { darken, lighten } from 'polished';

export const EmptyCart = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: ${theme.spacing.large};
    background: ${theme.colors.label};
    border-radius: ${theme.radii.default};
    min-height: 50vh;

    > svg {
      color: ${lighten(0.07, theme.colors.grey)};
      position: absolute;
    }

    > div {
      z-index: 1;
      text-align: center;
      color: ${theme.colors.darkGrey};

      > h2 {
        font-size: 5.6rem;
      }

      > p {
        margin: 12px 0 28px;
      }
    }

    @media (max-width: 560px) {
      min-height: 60vh;
    }
  `}
`;

export const StartShopping = styled(Link)`
  ${({ theme }) => css`
    background: ${darken(0.04, theme.colors.primary)};
    color: ${theme.colors.darkGrey};
    border: 0;
    border-radius: ${theme.radii.default};
    padding: 1.2rem 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
    transition: background 180ms ease-in-out;
    text-decoration: none;
    display: inline-block;
    margin-top: ${theme.spacing.default};

    &:hover {
      background: ${lighten(0.1, theme.colors.primary)};
    }
    &:active {
      background: ${darken(0.05, theme.colors.primary)};
    }
  `}
`;

export const TableWrapper = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    padding: ${theme.spacing.large};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};

    > footer {
      margin-top: 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > button {
        background: ${darken(0.04, theme.colors.primary)};
        color: ${theme.colors.darkGrey};
        border: 0;
        border-radius: ${theme.radii.small};
        padding: 1.2rem 2rem;
        font-weight: bold;
        text-transform: uppercase;
        transition: background ${theme.transition.default};

        &:hover {
          background: ${lighten(0.1, theme.colors.primary)};
        }
        &:active {
          background: ${darken(0.05, theme.colors.primary)};
        }
      }
    }

    @media (max-width: 520px) {
      padding: ${theme.spacing.default};
      > footer {
        flex-direction: column-reverse;

        > button {
          margin-top: 20px;
          width: 100%;
          padding: ${theme.spacing.default};
        }
      }
    }
  `}
`;

export const ProductTable = styled.table`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    width: 100%;
    border-collapse: collapse;

    thead th {
      color: ${lighten(0.09, theme.colors.darkGrey)};
      text-align: left;
      padding: 1.2rem;

      &:nth-child(2),
      &:nth-child(3) {
        text-align: center;
      }
    }

    tbody {
      > tr {
        border-bottom: 1px solid ${theme.colors.primaryLight};
      }

      td {
        padding: 1.2rem;

        &:nth-child(2),
        &:nth-child(3) {
          text-align: center;
        }

        &:last-child {
          width: 5%;
        }
      }

      span {
        display: block;
        margin-top: 0.4rem;
        font-size: ${theme.fontSizes.default};
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;

        input {
          border: 1px solid ${theme.colors.primaryLight};
          border-radius: 3px;
          color: ${theme.colors.darkGrey};
          padding: 0.6rem;
          width: 5rem;
          text-align: center;
        }
      }

      button {
        background: none;
        border: 0;
        padding: 6px 8px;
      }
    }

    @media (max-width: 356px) {
      tbody td {
        &:nth-child(3) {
          flex: 1;
          div {
            justify-content: flex-start;
          }
        }

        &:nth-child(4) {
        }
      }
    }

    @media (max-width: 385px) {
    }

    @media (max-width: 640px) {
      thead {
        display: none;
      }

      tbody {
        tr {
          flex-wrap: nowrap;
        }

        td {
          padding: 1.2rem 0;

          &:first-child {
          }

          &:nth-child(2) {
            span {
            }
          }

          &:nth-child(3),
          &:nth-child(4),
          &:nth-child(5) {
          }

          &:nth-child(3) {
          }

          &:nth-child(4) {
          }

          &:nth-child(5) {
          }
        }

        div {
          input {
          }
        }

        button {
          svg {
            width: 2rem;
            height: 2rem;
          }
        }
      }
    }
  `}
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 2.8rem;
    margin-left: 0.8rem;
  }
`;
