import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 527px;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  &>div.icons {
    display: flex;
    justify-content: center;
    gap: 2px;
    
    &>div {
      width: 77px;
      height: 77px;
      position: relative;
    }
  }

  @media (max-width: 1024px) {
    gap: 16px;
  }
`