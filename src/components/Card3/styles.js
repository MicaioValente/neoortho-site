import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 500px;

  display: flex;
  gap: 24px;

  &>div.texts {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    @media (max-width: 1165px) {
      gap: 16px;
    }
  } 
  
  @media (max-width: 1165px) {
    max-width: 444px;
    gap: 16px;
  }

  @media (max-width: 1024px) {
    max-width: 420px;
    gap: 8px;
  }
  
  @media (max-width: 970px) {
    max-width: 376px;
  }

  @media (max-width: 870px) {
    max-width: 330px;
  }

  @media (max-width: 770px) {
    max-width: 100%;
  }
`