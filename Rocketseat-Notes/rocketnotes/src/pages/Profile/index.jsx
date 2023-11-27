import { FiArrwLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom;'
import { Input } from '../../components/input';
import { Button } from '../../components/Button';

import { Container, Form, Avatar } from "./styles";

export function Profile() {
  <Container>
    <header>
      <Link to="/">
        <FiArrwLeft />
      </Link>
    </header>

    <Form>
      <Avatar>
        <img 
        src="https://github.com/Xjt-sss.png" 
        all="Foto dousúario" />
        <label htmlFor="avatar">
          <FiCamera />
          <input 
           id='avatar'
           type='file'
          /> 
        </label>
      </Avatar>
      <Input 
        placeholder="Nome"
        type="text"
        icon={FiUser}
      />

      <Input 
        placeholder="E-mail"
        type="text"
        icon={FiMail}
      />

      <Input 
        placeholder="Senha atul"
        type="password"
        icon={FiLock}
      />

       <Input 
        placeholder="Nova senha"
        type="password"
        icon={FiLock}
      />

      <Button title="Salvar" />
    </Form>
  </Container>
}