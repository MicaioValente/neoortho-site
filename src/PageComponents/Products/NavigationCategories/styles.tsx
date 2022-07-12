import styled from "styled-components";

export const Container = styled.div``

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
    user-select: none;
`

export const Head = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 25px;
`

export const Categories = styled.div``

export const ContainerCategorias = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 24px;
    margin-top: 8px;
`

export const ContainerTextCategories = styled.div<any>`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ selected, theme }) => selected ? theme.colors.primary : '#fff'};
        p{
            color: ${({ selected, theme }) => selected ? '#fff' : theme.colors.primary};
        }
    min-width: 80px;
    min-height: 40px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-right: 8px;
    margin-bottom: 8px;
    cursor: pointer;
        :hover {
            background-color: ${({ theme }) => theme.colors.primary};
            p{
                color: #fff
            }
        }
`

export const Paragraph = styled.p`
    max-width: 1078px;
    user-select: none;
    font-feature-settings: 'pnum' on, 'lnum' on;
    line-height: 150%;
    font-family: ${({ theme }) => theme.typography.font1};
    font-weight: ${({ theme }) => theme.typography.weights[0]};
    font-size: ${({ theme }) => theme.typography.sizes[1]};
    color: ${({ theme }) => theme.colors.primary};
`
