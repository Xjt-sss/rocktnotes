import {  FiMail, FiLock, FiUser } from "react-icons/fi"
import { Link } from "react-router-dom";
import { Input } from '../../components/input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rochet Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
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
         placeholder="Sema"
         type="password"
         icon={FiLock} 
         />
         <Button title="Cadastras"/>
         <Link to="/">
          Voltar ao Login
         </Link>
      </Form>
      <Background />
    </Container>
  )
}