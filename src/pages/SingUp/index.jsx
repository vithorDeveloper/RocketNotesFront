import { useState } from "react";
import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { Container, Form, Background } from "./style";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/index"


export function SingUp(){

  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("preencha todos os campos!")
    }

    api.post('/users', {name, email, password})
    .then(() => {
      alert("cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      }
    })
  }


  return(
    <Container>
      <Background/>

      <Form>

        <h1>RocketNotes</h1>
        <p>Aplicação pra salvar e gerenciar seus link úteis</p>

          <h2>Crie sua conta</h2>

          <Input
              placeholder= "Nome"
              type= "text"
              icon= {FiUser}
              onChange={e => setName(e.target.value)}
            />

            <Input
              placeholder= "E-mail"
              type= "text"
              icon= {FiMail}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              placeholder= "Senha"
              type= "password"
              icon= {FiLock}
              onChange={e => setPassword(e.target.value)}
            />

          <Button title="Cadastrar" onClick={handleSignUp}/>

          <Link to="/">Voltar para o login</Link>
          
      </Form>
    </Container>
  )
}