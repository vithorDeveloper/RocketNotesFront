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
    navigate(-1)
  }

  async function handleRemove(){
    const confirm = window.confirm("Excluir nota ?")

    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() =>{
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
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

            <ButtonText 
            title="Excluir nota"
            onClick={handleRemove}
            />

            <h1>{data.title}</h1>

            <p>
              {data.description}
            </p>

              {
                data.link &&

              <Section title="Links úteis">
                  <Links>
                    {
                      data.link.map(link => (
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
                data.tags &&

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
