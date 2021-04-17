import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';
import { Wrapper as WrapperCore, Title as TitleCore } from 'components';

const { spacing, palette } = defaultTheme;

export const Box = styled.section`
  background-color: ${palette.primary.light};
  padding: ${spacing(20)}px 0;
  width: 100%;
`;

export const Wrapper = styled(WrapperCore)`
  text-align: center;
`;

export const Title = styled(TitleCore)`
  && {
    margin-bottom: ${spacing(20)}px;
  }
`;

export const BoxNews = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BoxActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing(20)}px;
`;
