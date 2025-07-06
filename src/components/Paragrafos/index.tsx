import { P } from './styles'

export type Props = {
  children: string
  type?: 'preto' | 'cinza'
  fontSize?: number
}

const Paragrafo = ({ children, type, fontSize }: Props) => (
  <P fontSize={fontSize} type={type}>
    {children}
  </P>
)

export default Paragrafo
