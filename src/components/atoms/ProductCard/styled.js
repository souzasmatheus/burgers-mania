import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Avatar from '@material-ui/core/Avatar';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

export const Container = styled(Card)`
  width: 130px;
  height: 180px;
`;

export const StyledImage = styled(CardMedia)`
  height: 60%;
`;

export const Content = styled(CardContent)`
  padding: 0;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px 10px 10px;
`;

export const Title = styled.p`
  margin-top: 6px;
  text-align: center;
  font-size: 13px;
`;

export const Price = styled.p`
  font-size: 15px;
`;

export const ActionArea = styled(CardActionArea)`
  height: 100%;
  width: 100%;
`;

export const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin: 16px auto 0;
`;

export const ModalTitle = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #404040;
`;

export const StyledDialogContent = styled(DialogContent)`
  border-top: none;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledDialogActions = styled(DialogActions)`
  justify-content: space-around;
`;
