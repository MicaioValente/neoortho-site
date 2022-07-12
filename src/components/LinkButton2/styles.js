import styled from 'styled-components'

export const Container = styled.div`
  width: fit-content;
  
  a {
    padding: 4px 8px;
    font-family: ${({ theme }) => theme.typography.font1};
    font-weight: ${({ theme }) => theme.typography.weights[2]};
    font-size: ${({ theme }) => theme.typography.sizes[0]};
    color: ${({ theme }) => theme.colors.col3};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  `