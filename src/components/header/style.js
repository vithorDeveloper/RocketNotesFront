import styled from "styled-components";
import { Link } from "react-router-dom"


export const Container = styled.header `
  grid-area: header;

  width: 100%;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  >img{
    width: 5.6rem;
    height: 5.6rem;
    border: 50%;
    margin-left: 6.4rem;
  }

  >div{
    display: flex;
    flex-direction: column;
    margin-left: 1.6rem;
    line-height: 2.0rem;

    span{
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 1.4rem;
    }

    strong{
      color: ${({theme}) => theme.COLORS.WHITE};
      font-size: 1.6rem;
    }

  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  margin-right: 6.4rem;

  >svg{
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 2.6rem;
  }
`