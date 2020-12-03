import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 1168px;
  margin: 0 auto;
  flex-direction: column;

  @media (max-width: 480px) {
    padding: 15px 20px;
  }
`;

export const StyledImage = styled.img`
  width: 70px;
  align-self: center;
  margin-left: -10px;
`;
