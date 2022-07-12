import styled from "styled-components";

export const Container = styled.section`
  padding: 5.28%;
  display: flex;
  justify-content: center;
  gap: 72px;

  @media (min-width: 1440px) {
    padding: 72px;
  }
  .Path {
    :hover {
      fill: #7D55C7;
    }
  }

  .SvgEspecial {
      :hover {
        path{
          fill: #7D55C7;
        }

      }
  }
`

