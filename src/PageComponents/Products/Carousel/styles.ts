import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 250px;
    height: 350px;
    background-color: #fff;
    margin-bottom: 25px;
    padding-bottom: 8px;
`

export const ContainerImage = styled.div`
    width: 250px;
    max-height: 200px;
`

export const ImageC = styled(Image)`
    width:100%;
    height:100%;
    
`

export const Title = styled.h1`
    font-family: ${({ theme }) => theme.typography.font1};
    font-weight: ${({ theme }) => theme.typography.weights[0]};
    font-size: ${({ theme }) => theme.typography.sizes[1]};
    color: ${({ theme }) => theme.colors.col2};
    margin-bottom: 8px;
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
`