import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi"
import { Container, Form, Background } from "./style.js";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth.jsx";

export function SingIn(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {singIn} = useAuth()

  function handledSingIn(){
    singIn({email, password})
  }

  return(
    <Container>
      <Form>

        <h1>RocketNotes</h1>
        <p>Aplicação pra salvar e gerenciar seus link úteis</p>

          <h2>Faça seu login</h2>

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

          <Button title="Entrar" onClick={handledSingIn}/>

          <Link to="/register">Criar conta</Link>
          
      </Form>
      
      <Background/>
    </Container>
  )
}