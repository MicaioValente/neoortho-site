import styled from "styled-components";



export const Container = styled.div`
    /* background-color: aqua; */
`

export const ContainerSkeleton = styled.div`
    width: 500px;
    padding: 40px 0 115px 0 ;
    background-color: #fff;
    box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.12);
`
export const Row = styled.div`
    flex-direction: row;
`

export const ContainerIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 24px;
    height: 24px;
    padding: 6px;
    border-radius: 1px;
    margin-left: 25px;
`

export const Title = styled.h3`
    width: fit-content;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.typography.font2};
    font-weight: ${({ theme }) => theme.typography.weights[2]};
    font-size: ${({ theme }) => theme.typography.sizes[3]};
    color: ${({ theme }) => theme.colors.col2};
    /* margin-bottom: 25px; */
`
export const Head = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
`
