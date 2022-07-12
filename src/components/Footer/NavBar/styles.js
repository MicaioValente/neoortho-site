import styled from 'styled-components'

export const Container = styled.nav`
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  
    li {
      list-style: none;
    }

    @media (max-width: 1165px) {
       gap: 16px;
    }
  }
`