import { RiShutDownFill } from 'react-icons/ri';
import { Container, Profile, Logout } from './stules';

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Xjt-sss.pnh"
         alt="Foto do usuário" 
         />
         <div>
          <span>Bem-vindo</span>
          <strong>Jonathan Tavares</strong>
         </div>
      </Profile>
      <Logout>
        <RiShutDownFill />
      </Logout>
    </Container>
  )
}