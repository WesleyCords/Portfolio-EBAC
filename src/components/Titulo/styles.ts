import styled from 'styled-components'
import { Props } from '.' //Importando a Props. o Uso do ponto é porque o arquivo é Index.tsx.

export const Titulo = styled.h3<Props>`
  color: #282a35;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')}px;
`
