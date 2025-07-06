import Paragrafo from '../../components/Paragrafos'
import Titulo from '../../components/Titulo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}> Sobre mim</Titulo>
    <Paragrafo type="cinza">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nam nulla
      distinctio nobis modi maiores laborum asperiores, iusto vitae in fugit ut
      adipisci numquam aut non accusamus autem, est voluptas.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=wesleycords&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wesleycords&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
