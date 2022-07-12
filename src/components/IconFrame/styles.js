import styled from "styled-components"

export const Container = styled.div`
  width: 132px;
  height: 132px;
  position: relative;
  
  &>span {
    display: block;
    width: 128px;
    height: 128px;
    max-width: calc(100% - 8px);
    max-height: calc(100% - 8px);

    background: ${({ theme }) => theme.colors.primary};
    background-image: url(${({ src }) => src.src});
    
    -webkit-background-size: 72px;
    -moz-background-size: 72px;
    -o-background-size: 72px;
    background-size: 72px;
    background-position: center;
    background-repeat: no-repeat;

    position: relative;
    z-index: 1;
  }
  
  &::after {
    display: flex;
    content: '';
    width: 32px;
    height: 32px;
    background-color: ${({ theme }) => theme.colors.secondary};
  
    position: absolute;
    bottom: 0;
    right: 0;
  }
`