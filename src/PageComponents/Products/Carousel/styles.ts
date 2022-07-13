import styled from "styled-components";
import Image from "next/image";

export const ContainerImage = styled.div`
    width: 250px;
    max-height: 200px;
`

export const ImageC = styled(Image)`
    width: 100%;
    height: 100%;
    
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.typography.font1};
    font-weight: ${({ theme }) => theme.typography.weights[0]};
    font-size: ${({ theme }) => theme.typography.sizes[1]};
    color: ${({ theme }) => theme.colors.col2};
    margin-bottom: 8px;
    cursor: pointer;
`

export const SubTitle = styled.h1`
    font-family: ${({ theme }) => theme.typography.font1};
    font-weight: ${({ theme }) => theme.typography.weights[0]};
    font-size: ${({ theme }) => theme.typography.sizes[1]};
    color: ${({ theme }) => theme.colors.col2};
    margin-bottom: 8px;
    cursor: pointer;
    :hover{
        color: #fff;
    }
`

export const Tag = styled.p`
  font-family: ${({ theme }) => theme.typography.font1};
  font-weight: ${({ theme }) => theme.typography.weights[2]};
  font-size: ${({ theme }) => theme.typography.sizes[0]};
  color: ${({ theme }) => theme.colors.secondary};
`

export const ContainerText = styled.div`
    padding: 15px 25px;
    text-align: initial;
`

export const ContainerHover = styled.div`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    :hover{
        background-color: ${({ theme }) => theme.colors.primary};
        h1 {
            color: #fff !important;
        }
    }
`

export const Button = styled.div`
    padding: 12px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;

`

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 250px;
    height: 350px;
    background-color: #fff;
    margin-bottom: 25px;
    padding-bottom: 8px;
    margin-left: 20px;
`

export const Row = styled.div`
    display: flex !important;
    flex-direction: row;
`
export const ContainerCarrousel = styled.div`
    .ArrowButton__ButtonWrapper-sc-1ikb0hj-0 {
        position: absolute;
        bottom: -50px !important;
    }
`