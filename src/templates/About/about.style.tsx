import { RaisedBox } from 'components';
import styled from 'styled-components';

const Content = styled(RaisedBox)`
  flex-grow: 1;
  text-align: center;

  p {
    display: inline-block;
    text-align: left;
    max-width: 600px;
    margin-bottom: 30px;
  }
`;

export { Content };
