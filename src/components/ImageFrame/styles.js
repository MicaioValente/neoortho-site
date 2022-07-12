import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
    
  &>span {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: calc(100% - 23px);
    max-height: calc(100% - 23px);

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
    
    position: relative;
    z-index: 1;
  }
  
  &::after {
    display: flex;
    content: '';
    width: ${({ squareSize }) => squareSize ? squareSize : 255}px;
    height: ${({ squareSize }) => squareSize ? squareSize : 255}px;
    background-color: ${({ theme }) => theme.colors.secondary};
  
    position: absolute;
    bottom: 0;
    right: 0;
  }
  
  &.image-left {
    &>span {
      margin-left: auto;
    }

    &::after {
      left: 0;
    }
  }
`