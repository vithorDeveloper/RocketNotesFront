import styled from "styled-components";
import { Link } from "react-router-dom"


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25.0rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas:
  "brand header"
  "menu search"
  "menu content"
  "newnote content";
`
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};

  >h1{
    color: ${({theme}) => theme.COLORS.ORANGE};
    font-size: 2.4rem;
  }
  
`
export const Search = styled.div`
  grid-area: search;

  padding: 7rem 7rem 0;
`
export const Menu = styled.ul`
  grid-area: menu;
  background: ${({theme}) => theme.COLORS.BACKGROUND_900};

  text-align: center;
  padding: 6.4rem;

  >li{
    margin-bottom: 1.8rem;
    list-style-type: none;
  }
  
`
export const Content = styled.div`
  grid-area: content;

  padding: 3rem 7rem 0;
  overflow-y: auto;
`
export const NewNote= styled(Link)`
  grid-area: newnote;
  background: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.8rem;

  >svg{
    margin-right: 0.8rem;
  }
`