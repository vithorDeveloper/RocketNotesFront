import { Container } from './style'
import { Tag } from '../tag'

export function Note({data, ...rest}){
  
  return(
    <Container {...rest}>
      <h1> {data.title} </h1>

      {data.tags && 
      <footer>
          {data.tags.map(tag => <Tag title={tag.name} key={tag.id}/>)}
      </footer>}
    </Container>
  )
}

{/* aqui o data esta envolvido entra chaves pq ele é uma props e está
          tendo uma condicional sobre ele, pra que no casa de  ouver tag, exiba 
          um footer e nesse footer esta passando um map sobre ele o data.tags 
          formando um novo array que pro array tag sera passado uma key com tag.id
          e um title com tag.name */}