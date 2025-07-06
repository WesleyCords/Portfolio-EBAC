import styled from 'styled-components'

export const Card = styled.div`
  border: 1.5px solid ${(props) => props.theme.colors.colorBorder};
  padding: 16px;
`

export const LinkButton = styled.a`
  color: ${(props) => props.theme.colors.bg};
  font-size: 14px;
  background-color: ${(props) => props.theme.colors.bgButton};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
