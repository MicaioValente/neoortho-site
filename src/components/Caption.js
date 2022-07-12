import styled from "styled-components"

export const Caption = styled.p`
  line-height: 150%;
  font-family: ${({ theme }) => theme.typography.font1};
  font-weight: ${({ theme }) => theme.typography.weights[0]};
  font-size: ${({ theme }) => theme.typography.sizes[0]};
  color: ${({ theme }) => theme.colors.col7}

`