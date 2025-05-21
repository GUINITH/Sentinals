import { Page, Content, Header, InfoCard } from '@backstage/core-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import LogoIcon from '../Root/LogoIcon';
import { HomePageStarredEntities, HomePageToolkit } from '@backstage/plugin-home';
import HomeIcon from '@material-ui/icons/Home';

const tools = [
  { label: 'Documentação', url: '/docs', icon: <HomeIcon /> },
  { label: 'Catálogo', url: '/catalog', icon: <HomeIcon /> },
];

export const HomePage = () => (
    <Page themeId="home">
      <Header title="Bem-vindo ao Sentinels Platform" subtitle="Sua plataforma Backstage personalizada" />
      <Content>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
          <LogoIcon />
        </div>
        <Grid container spacing={3} direction="row" justifyContent="center">
          <Grid item xs={8} md={5}>
            <InfoCard title="Documentação">
              <p>Acesse a documentação dos seus projetos aqui.</p>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/docs"
              >
                Ir para Documentação
              </Button>
            </InfoCard>
          </Grid>
          <Grid item xs={8} md={5}>
            <InfoCard title="Catálogo">
              <p>Veja todos os componentes registrados na plataforma.</p>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/catalog"
              >
                Ir para Catálogo
              </Button>
            </InfoCard>
          </Grid>
          <Grid item xs={8} md={5}>
            <HomePageStarredEntities title='Projetos Favoritos' />
          </Grid>
          <Grid item xs={8} md={5}>
            <HomePageToolkit title='Links de Acesso' tools={tools} />
          </Grid>
        </Grid>
      </Content>
    </Page>
);