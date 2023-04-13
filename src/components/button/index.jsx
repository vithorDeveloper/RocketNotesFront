import { Container } from './style'

export function Button({title, ...rest}){

  return(
    <Container 
      {...rest}
      type ="button"
    >
        {title}
    </Container>
  )
}