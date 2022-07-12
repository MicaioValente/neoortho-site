import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  
  h2 {
    text-align: center;
    height: fit-content;
    padding: 19.5px 25px;
    
    font-family: ${({ theme }) => theme.typography.font2};
    font-weight: ${({ theme }) => theme.typography.weights[2]};
    font-size: ${({ theme }) => theme.typography.sizes[3]};
    
    color: ${({ theme }) => theme.colors.col3};
    background-color: ${({ theme }) => theme.colors.primary};
  }
  
  &>div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0 16px 16px 16px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`