import {Container, Profile, Logout} from './style'
import { useNavigate } from 'react-router-dom'
import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from "../../hooks/auth"
import { api } from '../../services'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {

  const navigate = useNavigate()

  const {singOut, user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleSingOut(){
    navigate("/")
    singOut()
  }

  return(
    <Container>
      <Profile to="/profile">

        <img 
          src={avatarUrl} 
        alt="foto de perfil" 
        />

        <div>
          <span>Bem Vindo</span>
            <strong>{user.name}</strong>
        </div>

      </Profile>

      <Logout onClick={handleSingOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}