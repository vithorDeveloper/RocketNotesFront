import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPlus, FiSearch } from "react-icons/fi"
import { Container, Brand, Search, Menu, Content, NewNote } from "./style";
import { Header } from "../../components/header"
import { ButtonText } from "../../components/buttonText"
import { Input } from "../../components/input"
import { Note } from "../../components/note"
import { Section } from "../../components/section"
import { api } from "../../services/index";

export function Home() {
  const [search, setSearch] = useState("")
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(response.data)

      console.log(response.data)
    }

    fetchNotes()
  },[tagsSelected, search])

  function handleTagSelected(tagName){
    if(tagName === "all"){
      return setTagsSelected([])
    }

    const alreadySelected = tagsSelected.includes(tagName)

    if(alreadySelected){
      const filteredTags = tagsSelected.filter(tag => tag !== tagName)
      setTagsSelected(filteredTags)
    }
    else{
      setTagsSelected(prevState => [...prevState, tagName])
    }
      
  }

  function handleDetails(id){
    navigate(`/details/${id}`)
  }

  return(
    <Container>

      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header/>

      <Search>
        <Input 
        placeholder="pesquise por titulo" 
        icon={FiSearch}
        onChange={(e) => setSearch(e.target.value)}
        /> 
      </Search>

      <Menu>
        <li>
          <ButtonText
            title="Todos" 
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li
              key={String(tag.id)}
            >
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Content>
        <Section title="Minha notas">
          {
            notes.map(note =>(
              <Note
                key={String(note.id)}
                title={note.title}
                data ={note}
                onClick={() => handleDetails(note.id)}
                
              />
            ))
          }

        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus/>
        Cria nota
      </NewNote>

    </Container>
  )
}