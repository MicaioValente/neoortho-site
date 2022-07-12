import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 5.28%;

  display: flex;
  justify-content: center;
  
  @media (min-width: 1440px) {
    padding: 72px;
  }

  &>div {
    width: 100%;
    max-width: 1366px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 72px 24px;
  }
`