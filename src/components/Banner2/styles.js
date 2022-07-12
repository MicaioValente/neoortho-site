import styled from "styled-components"

export const Container = styled.div`

  padding: 0 5.28% 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 90px;

  background-color: ${({ theme }) => theme.colors.primary};

  @media (min-width: 1440px) {
    padding: 0 72px;
  }
`

export const Image = styled.div`
  width: 420px;
  height: 420px;
  display: flex;
  
  background-image: url(${({ src }) => src.src});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

export const Texts = styled.div`
  width: 100%;
  max-width: 710px;
  padding: 20px 0;

  color: ${({ theme }) => theme.colors.col3};

  h3 {
    font-family: ${({ theme }) => theme.typography.font2};
    font-weight: ${({ theme }) => theme.typography.weights[2]};
    font-size: ${({ theme }) => theme.typography.sizes[3]};
  }
  
  h4 {
    padding-top: 5px;
    font-family: ${({ theme }) => theme.typography.font1};
    font-weight: ${({ theme }) => theme.typography.weights[1]};
    font-size: ${({ theme }) => theme.typography.sizes[2]};
  }
  
  p {
    padding-top: 48px;
    line-height: 150%;
    font-family: ${({ theme }) => theme.typography.font1};
    font-weight: ${({ theme }) => theme.typography.weights[2]};
    font-size: ${({ theme }) => theme.typography.sizes[1]};
  }
`