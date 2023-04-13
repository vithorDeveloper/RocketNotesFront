import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.4rem;
  padding: 0.5rem 1.6rem;
  margin-right: 0.6rem;
  border-radius: 0.5rem;
  color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  background-color: ${({theme}) => theme.COLORS.ORANGE};
`