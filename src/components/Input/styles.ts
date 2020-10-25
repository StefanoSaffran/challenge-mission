import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    width: 100%;

    & + div {
      margin-top: 1.6rem;
    }

    input {
      width: 100%;
      flex: 1;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      padding: 12px 20px 6px 0;
      border: none;
      border-bottom: 1px solid ${theme.colors.primaryDark};
      background-color: transparent;
      font-weight: 500;
      color: ${theme.colors.lightGrey};
    }

    > input ~ label {
      position: absolute;
      top: 12px;
      left: 0;
      color: ${theme.colors.primaryLight};
      transition: 0.4s;
      pointer-events: none;
    }

    > input:focus ~ label,
    > input:valid ~ label {
      transform: translateY(-24px);
      font-size: 0.8em;
      letter-spacing: 0.1em;
    }

    svg {
      position: absolute;
      right: 0;
      top: 15px;
      user-select: none;
    }
  `}
`;
