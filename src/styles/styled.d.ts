import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string,
      secondary: string,
      col1: string,
      col2: string,
      col3: string,
      col4: string,
      col5: string,
      col6: string,
      col7: string,
      col8: string,
      col9: string,
      col10: string,
    },
    typography: {
      font1: string,
      font2: string,
      weights: number[],
      sizes: string[]
    }
  }
}
