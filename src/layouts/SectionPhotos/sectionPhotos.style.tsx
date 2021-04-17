import styled from 'styled-components';
import { Wrapper as WrapperCore } from 'components';
import defaultTheme from 'styles/defaultTheme';

const { spacing, palette } = defaultTheme;

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
  display: grid;
  flex-wrap: wrap;
  grid-template-columns:
    minmax(auto, 240px) minmax(auto, 240px) minmax(auto, 240px)
    minmax(auto, 240px);
  justify-content: center;
  grid-gap: ${spacing(6)}px;
  width: 100%;

  img {
    display: block;
  }
`;

export const ActionBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
