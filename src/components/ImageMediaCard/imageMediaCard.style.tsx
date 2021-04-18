import CardCore from '@material-ui/core/Card';
import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';
import ImageCore from 'next/image';

const { spacing } = defaultTheme;

export const Card = styled(CardCore)`
  max-width: 345px;
  height: 100%;
  text-align: left;
  margin: 0 ${spacing(3)}px;
`;

export const Image = styled(ImageCore)`
  object-fit: cover;
`;
