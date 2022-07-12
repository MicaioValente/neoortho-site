import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 90px;
  padding: 74px 72px;
  padding: 74px 5.28%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.col4};
  box-shadow: 0px 0.8px 12px -4px ${({ theme }) => theme.colors.col10};
`