import styled from 'styled-components';
import { RaisedBox as RaisedBoxRoot } from 'components';
import defaultTheme from 'styles/defaultTheme';

const { spacing, palette } = defaultTheme;

export const Content = styled(RaisedBoxRoot)`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px !important;
  flex-wrap: wrap;
`;

export const BoxLinks = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  > a {
    margin-bottom: 10px;
  }
`;

export const SectionParks = styled.section`
  background-color: ${palette.primary.dark};
  padding: ${spacing(20)}px 0;
  width: 100%;
`;

export const BoxParks = styled.div`
  margin-top: ${spacing(20)}px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: ${spacing(9)}px;
`;
