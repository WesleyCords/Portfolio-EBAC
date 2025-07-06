import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      colorPrimary: string
      colorSec: string
      bg: string
      bgButton: string
      colorBorder: string
    }
  }
}
