import styled from 'styled-components'
import { P } from '../../components/Paragrafos/styles'

export const Description = styled(P)`
  margin: 24px 0 40px;
`

export const ButtonTheme = styled.button`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.bg};
  border: none;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.colorPrimary};
  padding: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }

  @media screen and (max-width: 640px) {
    width: 150px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media screen and (max-width: 640px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
