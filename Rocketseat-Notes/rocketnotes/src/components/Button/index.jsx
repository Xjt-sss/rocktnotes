import { Containe } from './style';

export function Button({title, loanding = false, ...rest}){
  return(
  <Containe type="button" disable={loanding} {...rest}>
 { loanding ? "Carregando... " : title }
  </Containe>)
}