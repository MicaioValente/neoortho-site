import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  cursor: pointer;

  &>div{
    height: 430px;
    position: relative;
    overflow: hidden;

    display: flex;
    justify-content: center;
    
    h3 {
      width: 100%;
      padding: 16px;
      text-align: center;
      
      position: absolute;
      bottom: 0;
      
      font-family: ${({ theme }) => theme.typography.font1};
      font-weight: ${({ theme }) => theme.typography.weights[1]};
      font-size: ${({ theme }) => theme.typography.sizes[2]};
      
      color: ${({ theme }) => theme.colors.col3};
      background-color: ${({ theme }) => theme.colors.primary};
      
      opacity: 0;
      transition: all ease-in-out 0.3s;
    }
    
    &>div {
      width: 110%;
      height: 110%;
      position: relative;
      transition: all ease-in-out 0.3s;
    }
    
    &:hover div {
      width: 100%;
      height: 100%;
    }
    
    &:hover h3 {
      background-size: none;
      opacity: 1;
    }
  }
`