import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafos'
import Titulo from '../../components/Titulo'

import { ButtonTheme, Description, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}> Wesley Cordeiro</Titulo>
      <Paragrafo type="cinza" fontSize={16}>
        Wesleycords
      </Paragrafo>
      <Description fontSize={12} type="preto">
        Dev Full Stack
      </Description>
      <ButtonTheme>Mudar tema</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
