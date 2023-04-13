import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Form } from './style'
import { Header } from '../../components/header'
import { Input } from '../../components/input'
import { TextArea } from '../../components/textArea'
import { NewItem } from '../../components/noteItem'
import { Section } from '../../components/section'
import { Button } from '../../components/button'
import { api } from '../../services/index'
import { Link } from "react-router-dom"


export function NewNote(){

  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveLink(deleted){
    setLinks(prevState => (prevState.filter(link => link !== deleted) ))
  }

  function handleRemoveTag(deleted){
    setTags(prevState => (prevState.filter(tag => tag !== deleted) ))
  }

  async function handleNewNote(){

    if(!title){
      return alert("Informe o titulo da nota")
    }

    if(newLink){
      return alert("Ainda há um link no campo, adicione-o ou deixe o campo vazio")
    }

    if(newTag){
      return alert("Ainda há uma tag no campo, adicione-a ou deixe o campo vazio")
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags
    })

    alert("Nota criada com sucesso !!")
    navigate("/")
  }

  return(
    <Container>
      <Header/>

      <main>
          <Form>
              <header>
                  <h1>Criar nota</h1>
                  <Link to="/">voltar</Link>
              </header>

              <Input 
              placeholder="Titulo"
              onChange={e => setTitle(e.target.value)}
              />

              <TextArea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
              />

              <Section title="Link úteis">
                {
                    links.map((link, index) =>(
                      <NewItem
                        key={String(index)}
                        value={link}
                        onClick={() => handleRemoveLink(link)}
                      />
                    ))
                }
                <NewItem 
                isNew
                placeholder="Novo link" 
                value={newLink}
                onClick={handleAddLink}
                onChange={e => setNewLink(e.target.value)}
                />
              </Section>

              <Section title="Marcadores">
                <div className="tags">
                  {
                    tags.map((tag, index) => (
                      <NewItem
                        key={String(index)}
                        value={tag}
                        onClick={() => handleRemoveTag(tag)}
                      />
                    ))
                  }
                  <NewItem 
                  isNew
                  placeholder="Nova Tag" 
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                  /> 
                </div>
              </Section>

                  <Button
                  title= "Salvar"
                  onClick={handleNewNote}
                  />
          </Form>
      </main>
    </Container>
  )
}