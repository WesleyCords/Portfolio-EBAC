import styled from 'styled-components'
import { Props } from '.' //Importando a Props. o Uso do ponto é porque o arquivo é Index.tsx.

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.type === 'preto'
      ? props.theme.colors.colorPrimary
      : props.theme.colors.colorSec};
  line-height: 22px;
`
