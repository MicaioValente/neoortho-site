import styled from "styled-components"

export const Paragraph = styled.p`
  max-width: 1078px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  line-height: 150%;
  font-family: ${({ theme }) => theme.typography.font1};
  font-weight: ${({ theme }) => theme.typography.weights[0]};
  font-size: ${({ theme }) => theme.typography.sizes[1]};
  color: ${({ theme }) => theme.colors.col2};
`