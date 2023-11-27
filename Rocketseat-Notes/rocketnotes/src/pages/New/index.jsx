import { Link } from "react-router-dom";

import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Heder";
import { Input } from "../../components/input";

import { Container, Form } from "./styles";

export function New(){
  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          
          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo links" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
          <NoteItem value="react" />
          <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}