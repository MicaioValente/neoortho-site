import styled from "styled-components"

export const H3 = styled.h3`
  text-align: ${({ align }) => align};
  width: fit-content;
  font-family: ${({ theme }) => theme.typography.font2};
  font-weight: ${({ theme }) => theme.typography.weights[2]};
  font-size: ${({ theme }) => theme.typography.sizes[3]};
  color: ${({ theme }) => theme.colors.col2};
`