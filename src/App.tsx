import { ThemeProvider } from 'styled-components'
import temaLight from './themes/light'
import temaDark from './themes/dark'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import { useState } from 'react'

function App() {
  const [isUsingThemeDark, setIsUsingThemeDark] = useState(false)

  function toggleTheme() {
    setIsUsingThemeDark(!isUsingThemeDark)
  }

  return (
    <ThemeProvider theme={isUsingThemeDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
