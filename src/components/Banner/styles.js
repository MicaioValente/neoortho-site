import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 676px;

  display: flex;
  justify-content: center;
  
  background-image: 
    linear-gradient(
      ${({ theme }) => theme.colors.col10}, 
      ${({ theme }) => theme.colors.col10}
    ),
    url(${({ src }) => src.src})
  ;
  
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-position: center;

  h1 {
    width: fit-content;
    height: fit-content;
    margin: auto 0 186px 0;
    padding: 15px 25px;

    font-family: ${({ theme }) => theme.typography.font2};
    font-weight: ${({ theme }) => theme.typography.weights[2]};
    font-size: ${({ theme }) => theme.typography.sizes[4]};

    color: ${({ theme }) => theme.colors.col3};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`