import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 343px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Date = styled.div`
  font-feature-settings: 'pnum' on, 'lnum' on;
  font-family: ${({ theme }) => theme.typography.font1};
  font-weight: ${({ theme }) => theme.typography.weights[2]};
  font-size: ${({ theme }) => theme.typography.sizes[1]};
  color: ${({ theme }) => theme.colors.primary};
  
  &>span {
    padding-left: 9px;
    font-weight: ${({ theme }) => theme.typography.weights[0]};
    color: ${({ theme }) => theme.colors.col8};
  }
`

export const Tag = styled.div`
  width: fit-content;
  padding: 4px 8px;
  
  font-family: ${({ theme }) => theme.typography.font1};
  font-weight: ${({ theme }) => theme.typography.weights[2]};
  font-size: ${({ theme }) => theme.typography.sizes[0]};
  color: ${({ theme }) => theme.colors.col3};
  background-color: ${({ theme }) => theme.colors.secondary};
`