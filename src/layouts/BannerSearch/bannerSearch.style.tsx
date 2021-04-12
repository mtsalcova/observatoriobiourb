import styled from 'styled-components';

export const Box = styled.main`
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  min-height: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SearchItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 100%;

  > h2 {
    margin: 50px 0;
    font-weight: normal;
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  color: white;
  text-align: center;
  width: 800px;
`;

export const SearchItemForm = styled.form`
  display: flex;
`;
