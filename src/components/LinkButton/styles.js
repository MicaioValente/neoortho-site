import styled from 'styled-components'

export const Container = styled.div`
  height: 42px;
  border-bottom: 1px solid transparent;
  transition: all ease-in-out 0.3s;
  
  a {
    height: 100%;
    padding: 0 8px;

    display: grid;
    place-items: center;
    
    font-size: ${({ theme }) => theme.typography.sizes[1]};
    font-weight: ${({ theme }) => theme.typography.weights[0]};
    font-family: ${({ theme }) => theme.typography.font1};
    color: ${({ theme }) => theme.colors.primary};
    transition: all ease-in-out 0.3s;
  }
  
  &.border {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  
  &:hover,
  &.active {
    border-color: ${({ theme }) => theme.colors.primary};
    
    a {
      font-weight: ${({ theme }) => theme.typography.weights[2]};
    }
  }
`