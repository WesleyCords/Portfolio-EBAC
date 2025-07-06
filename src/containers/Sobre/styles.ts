import styled from 'styled-components'

export const GithubSection = styled.div`
  margin: 32px 0 64px;

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    display: flex;

    img:nth-child(1) {
      width: 55%;
      margin-right: 10px;
    }
  }

  img {
    height: 157px;

    @media screen and (max-width: 640px) {
      width: 100%;
    }
  }
`
