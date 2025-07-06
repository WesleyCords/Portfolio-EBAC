import styled from 'styled-components'
import { P } from '../../components/Paragrafos/styles'

export const Description = styled(P)`
  margin: 24px 0 40px;
`

export const ButtonTheme = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: #eeeeee;
  border: none;
  border-radius: 12px;
  background-color: #282a35;
  padding: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
