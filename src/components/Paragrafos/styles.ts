import styled from 'styled-components'
import { Props } from '.' //Importando a Props. o Uso do ponto é porque o arquivo é Index.tsx.

export const P = styled.p<Props>`
  font-size: 14px;
  color: ${(props) => (props.type === 'preto' ? '#282A35' : '#949494')};
  line-height: 22px;
`
