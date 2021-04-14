import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';

const { spacing } = defaultTheme;

export const Box = styled.div`
  border-radius: 4px;
  width: 240px;
`;

export const Details = styled.div`
  padding: ${spacing(4)}px;

  > strong {
    display: block;
  }
`;
