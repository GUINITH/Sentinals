import {
  createBaseThemeOptions,
  createUnifiedTheme,
  genPageTheme,
  palettes,
  shapes,
} from '@backstage/theme';

export const myTheme = createUnifiedTheme({
  ...createBaseThemeOptions({
    palette: {
      ...palettes.light,
      primary: {
        main: '#1976d2', // azul forte
      },
      secondary: {
        main: '#6c63ff', // roxo azulado
      },
      error: {
        main: '#d32f2f', // vermelho para erros
      },
      warning: {
        main: '#ffb300', // amarelo para avisos
      },
      info: {
        main: '#1976d2', // azul para informações
      },
      success: {
        main: '#388e3c', // verde para sucesso
      },
      background: {
        default: '#ffffff', // fundo branco
        paper: '#f5f6fa',   // branco levemente acinzentado
      },
      text: {
        primary: '#212121',   // letras pretas
        secondary: '#424242', // cinza escuro para textos secundários
      },
      divider: '#e0e0e0', // divisórias roxo azulado
      banner: {
        info: '#1976d2',
        error: '#d32f2f',
        text: '#212121',
        link: '#6c63ff',
      },
      errorBackground: '#ffd6d6',
      warningBackground: '#fff8e1',
      infoBackground: '#e3f2fd',
      navigation: {
        background: '#0d1b2a', // azul escuro na barra lateral
        indicator: '#1976d2',  // azul para indicador ativo
        color: '#ffffff',      // letras brancas no menu
        selectedColor: '#1976d2',
      },
    },
  }),
  defaultPageTheme: 'home',
  fontFamily: 'Comic Sans MS',
  pageTheme: {
    home: genPageTheme({ colors: ['#1976d2', '#6c63ff'], shape: shapes.wave }),
    documentation: genPageTheme({
      colors: ['#1976d2', '#6c63ff'],
      shape: shapes.wave2,
    }),
    tool: genPageTheme({ colors: ['#1976d2', '#6c63ff'], shape: shapes.round }),
    service: genPageTheme({
      colors: ['#1976d2', '#6c63ff'],
      shape: shapes.wave,
    }),
    website: genPageTheme({
      colors: ['#1976d2', '#6c63ff'],
      shape: shapes.wave,
    }),
    library: genPageTheme({
      colors: ['#1976d2', '#6c63ff'],
      shape: shapes.wave,
    }),
    other: genPageTheme({ colors: ['#1976d2', '#6c63ff'], shape: shapes.wave }),
    app: genPageTheme({ colors: ['#1976d2', '#6c63ff'], shape: shapes.wave }),
    apis: genPageTheme({ colors: ['#1976d2', '#6c63ff'], shape: shapes.wave }),
  },
});