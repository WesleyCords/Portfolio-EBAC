import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 36px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 16px 0;
  }
`
