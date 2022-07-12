import styled from "styled-components";

export const Container = styled.section`
  padding: 5.28%;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  
  background-color: ${({ theme }) => theme.colors.col3};
  
  @media (min-width: 1440px) {
    padding: 72px;
  }

  @media (max-width: 1024px) {
    gap: 16px;
  }
`

export const Cards = styled.div`
  width: 100%;
  max-width: 1366px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1165px) {
    gap: 26px;
  }
`