import { Container, Lincks, Content } from "./style";

import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';
import { Header } from '../../components/Heder';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';


export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Container>

      <ButtonText title="Excluir nota" />
      <h1>
      Introdução ao React
      </h1>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <Section title="Links úteis">
        <Lincks>
          <li>
            <a href="#">http://www.rocketseat.con.br/</a>
          </li>
          <li>
            <a href="#">http://www.rocketseat.con.br/</a>
          </li>
        </Lincks>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>


      <Button title="Voltar"/>
      </Container>
      </main>
    </Container>
    )
}