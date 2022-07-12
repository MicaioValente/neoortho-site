import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth && "320px"};
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 16px;
  }
`

export const Link = styled.a`
  width: fit-content;
  font-family: ${({ theme }) => theme.typography.font1};
  font-weight: ${({ theme }) => theme.typography.weights[2]};
  font-size: ${({ theme }) => theme.typography.sizes[1]};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`