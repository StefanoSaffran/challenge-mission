import styled, { css } from 'styled-components';
import { lighten } from 'polished';

import Button from '~/components/Button';

export const EmptyCart = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    background: ${theme.colors.background};
    padding: ${theme.spacing.large};
    border-radius: ${theme.radii.default};
    box-shadow: ${theme.shadows.default};
    min-height: 50vh;

    > svg {
      color: ${lighten(0.07, theme.colors.background)};
      position: absolute;
    }

    > div {
      z-index: 1;
      text-align: center;
      color: ${theme.colors.label};

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

export const StartShopping = styled(Button)`
  ${({ theme }) => css`
    padding: 1.2rem 1.6rem;
    text-transform: uppercase;
    margin-top: ${theme.spacing.default};
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

    @media (max-width: 640px) {
      thead {
        display: none;
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
