import { Container } from './styles';
import { Tag } from '../Tag'

export function Notes({ date, ...rest }){
  return(
    <Container {...rest}>
      <h1>{date.title}</h1>

      {
        date.tags && 
        <footer>
          {
            date.tags.map(tag => {
              <Tag key={tag.id} title={tag.name}/>
            })
          }
        </footer>
      }
    </Container>
  );
}