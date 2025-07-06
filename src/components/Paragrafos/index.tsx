import { P } from './styles'

export type Props = {
  children: string
  type?: 'preto' | 'cinza'
}

const Paragrafo = ({ children, type }: Props) => <P type={type}>{children}</P>

export default Paragrafo
