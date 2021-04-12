import styled from 'styled-components';
import { Wrapper as WrapperCore } from 'components';
import defaultTheme from 'styles/defaultTheme';
import Typography from '@material-ui/core/Typography';

const { spacing, palette } = defaultTheme;

export const Subtitle = styled(Typography)`
  && {
    margin-bottom: ${spacing(1)}px;
  }
`;

export const Box = styled.section`
  background-color: ${palette.primary.dark};
  padding: ${spacing(20)}px 0;
  width: 100%;
`;

export const Wrapper = styled(WrapperCore)`
  text-align: center;

  > p {
    color: white;
    margin-top: ${spacing(4)}px;
    font-size: 1.8rem;
  }
`;

export const Photos = styled.div`
  margin: ${spacing(20)}px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  > div {
    margin-bottom: ${spacing(6)}px;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
