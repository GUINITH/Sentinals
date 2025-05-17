import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const myDarkTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.dark,
      primary: {
        main: '#1976d2', // azul forte
      },
      secondary: {
        main: '#6c63ff', // roxo azulado
      },
      error: {
        main: '#d32f2f',
      },
      warning: {
        main: '#ffb300',
      },
      info: {
        main: '#1976d2',
      },
      success: {
        main: '#388e3c',
      },
      background: {
        default: '#140025', // preto/cinza escuro
        paper: '#23263a',   // cinza escuro para cards
      },
      text: {
        primary: '#ffffff',   // letras brancas
        secondary: '#bdbdbd', // cinza claro para textos secundários
      },
      divider: '#e0e0e0',
      banner: {
        info: '#1976d2',
        error: '#d32f2f',
        text: '#ffffff',
        link: '#6c63ff',
      },
      errorBackground: '#2d0909',
      warningBackground: '#332600',
      infoBackground: '#0d1b2a',
      navigation: {
        background: '#140028', // azul escuro na barra lateral
        indicator: '#6c63ff',  // roxo azulado para indicador ativo
        color: '#ffffff',      // letras brancas no menu
        selectedColor: '#6c63ff',
      },
    },
  }),
  defaultPageTheme: 'home',
  fontFamily: 'Comic Sans MS',
  pageTheme: {
    home: genPageTheme({ colors: ['#140028', '#6c63ff'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#140028', '#6c63ff'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#140028', '#6c63ff'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#140028', '#6c63ff'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#140028', '#6c63ff'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#140028', '#6c63ff'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#140028', '#6c63ff'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#140028', '#6c63ff'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#140028', '#6c63ff'], shape: shapes.wave }),
  },
});