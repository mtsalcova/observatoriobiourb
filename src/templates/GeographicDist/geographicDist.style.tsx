import styled from 'styled-components';

import { RaisedBox as RaisedBoxRoot } from 'components';

export const Content = styled(RaisedBoxRoot)`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0 !important;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;
