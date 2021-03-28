import styled from 'styled-components';
import { Title as TitleCore, Wrapper as WrapperCore } from 'components';
import defaultTheme from 'styles/defaultTheme';

const { spacing } = defaultTheme;

export const Title = styled(TitleCore)`
  text-align: center;
`;

export const Box = styled.section`
  background-color: ${({ theme }) => theme.palette.primary.dark};
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
`;
