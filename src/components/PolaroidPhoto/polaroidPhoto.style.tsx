import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';

const { spacing } = defaultTheme;

export const Box = styled.div`
  border-radius: 4px;
  background: white;
  width: 270px;

  > img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }
`;

export const Details = styled.div`
  padding: ${spacing(4)}px;

  > strong {
    display: block;
  }
`;
