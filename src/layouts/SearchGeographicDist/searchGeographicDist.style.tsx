import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';

const { spacing } = defaultTheme;

export const Box = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;

  > div {
    width: 200px;
    margin-right: ${spacing(5)}px};
  }
`;
