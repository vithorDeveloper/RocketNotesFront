import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/index";

import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";


import { Link } from "react-router-dom"
import { Input } from "../../components/input"
import { Button } from "../../components/button"

import  avatarPlaceholder  from "../../assets/avatar_placeholder.svg"

export function Profile(){
  const {user, updateProfile} = useAuth()

  const navigate = useNavigate()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [passwordOld, setPasswordOld]= useState("")
  const [passwordNew, setPasswordNew] = useState("")

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleProfile(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile ({user: userUpdated, avatarFile})
  }
  
  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack(){
    navigate(-1)
  }

  return(
    <Container>
      <header>
        <button
        type="button"
        onClick={handleBack}
        >
          <FiArrowLeft/>
        </button>
      </header>

        <Avatar>

          <img 
          src={avatar}
          alt="foto de perfil"
          />

          <label htmlFOR="avatar">
            <FiCamera/>

            <input 
            type="file" 
            id="avatar"
            onChange={handleChangeAvatar}
            />

          </label>
        </Avatar>

      <Form>

        <Input
          placeholder="Nome"
          type="text"
          icon= {FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder= "E-mail"
          type= "text"
          icon= {FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          placeholder= "Senha atual"
          type= "password"
          icon= {FiLock}
          onChange={e => setPasswordOld(e.target.value)}

        />

        <Input
          placeholder= "Nova senha"
          type= "password"
          icon= {FiLock}
          onChange={e => setPasswordNew(e.target.value)}

        />

        <Button title= "Salvar" onClick={handleProfile}/>

      </Form>
    </Container>
  )
}