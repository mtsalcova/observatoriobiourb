import styled from 'styled-components';
import defaultTheme from 'styles/defaultTheme';

const { palette } = defaultTheme;

export const Line = styled.div`
  border-bottom: 1px solid #7d7c83;
  width: 100%;

  > a {
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: #f8f9fa;
  }

  a > p {
    color: ${palette.primary.dark};
  }
`;
