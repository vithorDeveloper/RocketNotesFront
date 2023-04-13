import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};

    border: ${({theme , isNew}) => isNew ? `0.1rem dashed ${theme.COLORS.GRAY_300}` : `none`};

    margin-bottom: 0.8em;
    border-radius: 1rem;
    padding-right: 1.6rem;

    >button{
      border: none;
      background: none;
    }

    .btn-del{
      color: ${({theme}) => theme.COLORS.RED};
    }

    .btn-add{
      color: ${({theme}) => theme.COLORS.ORANGE};
    }

    >input{
      height: 5.6rem;
      width: 100%;
      border: none;

      padding: 1.2rem;

      color: ${({theme}) => theme.COLORS.WHITE};
      background: transparent;

      &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_300};

      }
    }
`