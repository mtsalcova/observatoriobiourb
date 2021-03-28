import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';

const { primary } = defaultTheme.palette;

export const Subtitle = styled.h2`
  font-size: 2.4rem;
  color: ${primary.contrastText};
`;
