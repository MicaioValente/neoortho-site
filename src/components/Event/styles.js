import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 380px;

  display: flex;
  flex-direction: column;
  gap: 48px;
`
export const Link = styled.a`
  margin-top: auto;
  text-align: center;
  padding: 11px;
  
  font-family: ${({ theme }) => theme.typography.font2};
  font-weight: ${({ theme }) => theme.typography.weights[2]};
  font-size: ${({ theme }) => theme.typography.sizes[3]};
  
  color: ${({ theme }) => theme.colors.col3};
  background-color: ${({ theme }) => theme.colors.primary};
`