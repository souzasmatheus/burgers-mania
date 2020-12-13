import styled, { css } from 'styled-components';

export const BreadCrumbItem = styled.p`
  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${({ theme }) => theme.black.default};
    `}
`;
