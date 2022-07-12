import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 90px;
  padding: 0 72px;
  padding: 0 5.28%;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.col4};

  position: fixed;
  z-index: 2;
`