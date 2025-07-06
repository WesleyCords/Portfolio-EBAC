import Paragrafo from '../Paragrafos'
import Titulo from '../Titulo'
import { Card, LinkButton } from './styles'

const Projeto = () => (
  <Card>
    <Titulo> Projeto Lista de Tarefas</Titulo>
    <Paragrafo type="preto"> Lista de Tarefas Feitas Com VueJS </Paragrafo>
    <LinkButton> Vizualizar </LinkButton>
  </Card>
)

export default Projeto
