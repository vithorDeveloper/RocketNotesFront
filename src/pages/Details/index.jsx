import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Container, Links, Content} from "./style"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Section } from "../../components/section"
import { Tag } from "../../components/tag"
import { ButtonText } from "../../components/buttonText"
import { Link } from "react-router-dom"
import { api } from "../../services/index"


export function Details() {
  const [data, setData] = useState(null)

  const params = useParams()
  const navigate = useNavigate()

  function handleBack(){
    navigate("/")
  }

  useEffect(() =>{
    async function fetchNote(){
      const response = await api.get(`/note/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  },[])
  

  return (
    <Container>

      <Header/>


      {
        data && 

        <main>
        <Content>

            <ButtonText title="Excluir nota"/>

            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>

              {
                data &&

              <Section title="Links úteis">
                  <Links>
                    {
                      data.links.map(link => (
                        <li key={String(link.id)}>
                          <a 
                            href={link.url} 
                            target="_blank"
                          >
                            {link.url}
                          </a>
                        </li>
                      ))
                    }
                  </Links>
              </Section>
              }
              
              {
                data &&

                <Section title="Marcadores">
                  {
                    data.tags.map(tag =>(
                      <Tag 
                        key={String(tag.id)}
                        title={tag.name}
                      />
                    ))
                  }

              </Section>
              
              }

            <Link to="/">
              <Button 
              title="voltar"
              onClick={handleBack}
              />
            </Link>
            

          </Content>
        </main>
      }
      
    </Container>
  )
  
}
