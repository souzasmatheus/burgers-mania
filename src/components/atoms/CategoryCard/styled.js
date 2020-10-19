import styled from 'styled-components';
import ButtonBase from '@material-ui/core/ButtonBase';

export const Container = styled(ButtonBase)`
  opacity: 0;
  background-image: ${({ source }) => `url(${source})`};
  width: 80px;
  height: 80px;
  background-position: center center;
  background-size: cover;
  border-radius: 10px;
  background-repeat: no-repeat;
  padding: 6px;

  && {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const LabelContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ffd902;
  padding: 4px 6px;
  border-radius: 15px;
`;

export const Label = styled.p`
  font-weight: 700;
  font-size: 12px;
`;
