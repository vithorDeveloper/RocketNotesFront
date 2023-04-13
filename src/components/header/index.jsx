import {Container, Profile, Logout} from './style'
import {RiShutDownLine} from 'react-icons/ri'
import { useAuth } from "../../hooks/auth"
import { api } from '../../services'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {

  const {singOut, user} = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

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

      <Logout onClick={singOut}>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}