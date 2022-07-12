import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 625px;
  height: 565px;

  border-radius: 3px;
  box-shadow: 0px 0.8px 12px -4px ${({ theme }) => theme.colors.col10};
  background-color: ${({ theme }) => theme.colors.col3};
`