import CardCore from '@material-ui/core/Card';
import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';

const { spacing } = defaultTheme;

export const Card = styled(CardCore)`
  max-width: 345px;
  text-align: left;
  margin: 0 ${spacing(3)}px;
`;
