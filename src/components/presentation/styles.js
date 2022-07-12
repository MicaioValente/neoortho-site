import styled from "styled-components"

export const Container = styled.section`
  padding: 5.28%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;

  &>div{
    width: 100%;
    max-width: 1078px;
    display: flex;
    justify-content: center;
    gap: 48px;

    &.image-left {
      flex-direction: row-reverse;
    }
    
    @media (max-width: 1024px) {
      gap: 32px;
    }
  }

  @media (min-width: 1440px) {
    padding: 72px;
  }
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (max-width: 1024px) {
    gap: 32px;
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 710px;
`