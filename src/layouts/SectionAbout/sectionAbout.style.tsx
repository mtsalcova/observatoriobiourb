import styled from 'styled-components';
import { Wrapper as WrapperRoot } from 'components';
import Typography from '@material-ui/core/Typography';
import defaultTheme from 'styles/defaultTheme';

const { spacing } = defaultTheme;

export const Box = styled.section`
  width: 100%;
`;

export const Subtitle = styled(Typography)`
  && {
    margin-bottom: ${spacing(1)}px;
  }
`;

export const Wrapper = styled(WrapperRoot)`
  background: white;
  border-radius: 4px;
  margin-top: -50px;
  padding: 84px 0;
  display: flex;
  justify-content: center;
`;

export const TextBox = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 610px;
  width: 100%;

  > h2 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }

  > p {
    margin: 32px 0;
  }
`;
