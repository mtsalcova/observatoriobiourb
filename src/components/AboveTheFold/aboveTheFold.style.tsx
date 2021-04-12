import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  width: 100%;
  flex-direction: column;
`;
