import styled from "styled-components"

export const H2 = styled.h2`
  width: fit-content;
 
  font-family: ${({ theme }) => theme.typography.font2};
  font-weight: ${({ theme }) => theme.typography.weights[2]};
  font-size: ${({ theme }) => theme.typography.sizes[4]};
  color: ${({ theme }) => theme.colors.col2}
`