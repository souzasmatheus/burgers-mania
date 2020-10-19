import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: 0;
  margin-left: -20px;
  padding-left: 20px;
  margin-right: -20px;
`;

export const ChildWrapper = styled.div`
  flex: 0 0 auto;
`;

export const Title = styled.p`
  margin: 25px 0 15px;
  font-weight: 700;
  font-size: 23px;
`;
