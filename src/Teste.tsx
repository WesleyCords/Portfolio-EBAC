import styled from 'styled-components'

type BotaoProps = {
  primary?: boolean
  tamanho?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.primary ? 'red' : 'blue')};
  margin-left: 2px;
  color: #fff;
  padding: 5px 12px;
  font-size: ${(props) => props.tamanho || '16px'};
`

const BoatoPerigo = styled(Botao)`
  background-color: green;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Botao tamanho="12px" primary>
        Botão Primary
      </Botao>
      <Botao tamanho="14px"> Botão Secundary </Botao>
      <BoatoPerigo> Não Clique Aqui</BoatoPerigo>
    </>
  )
}

export default Teste
