import styled from 'styled-components';
import { Wrapper as WrapperCore } from './../Wrapper/Wrapper';

export const Box = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 80px;
  display: flex;
  width: 100%;
`;

export const Wrapper = styled(WrapperCore)`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-content: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  > a {
    font-size: 1.8rem;
  }

  > button,
  > a {
    margin-left: ${({ theme }) => theme.spacing(9)}px;
  }
`;
