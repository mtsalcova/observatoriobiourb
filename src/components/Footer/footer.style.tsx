import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';
import { Wrapper as WrapperRoot } from 'components';
const { spacing, palette } = defaultTheme;

export const Box = styled.footer`
  background-color: white;
  padding: ${spacing(10)}px 0;
  width: 100%;
`;

export const Wrapper = styled(WrapperRoot)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  a {
    color: ${palette.primary.light};
    text-decoration: underline;
  }
`;
