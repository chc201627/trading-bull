import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';
import Logo from '../../components/Logo';
import useLocales from '../../hooks/useLocales';

// ----------------------------------------------------------------------

const infoCards = [
  {
    title: '+15',
    description: 'home.scopeData.card0Description',
  },
  {
    title: '+24',
    description: 'home.scopeData.card1Description',
  },
  {
    title: '+30 K',
    description: 'home.scopeData.card2Description',
  }
]

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(24),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(24),
  },
}));

const CardStyle = styled('div')(({ theme }) => (
  {
    border: 0,
    maxWidth: 380,
    margin: 'auto',
    textAlign: 'center',
    padding: theme.spacing(0, 5, 0),
  }
));

// ----------------------------------------------------------------------

export default function ScopeData() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  const { translate } = useLocales();

  return (
    <RootStyle >
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              {translate('home.scopeData.title')}
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">{translate('home.scopeData.description')}</Typography>
          </m.div>
          <Logo sx={{width: '40', height: '80', marginTop: '20px'}} svgWidth={280} svgHeight={80}/>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gap: { xs: 5, lg: 10 },
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
          }}
        >
          {infoCards.map((card) => (
            <m.div variants={varFade().inUp} key={card.title}>
              <CardStyle>
                <Typography variant="h2" paragraph>
                  {card.title}
                </Typography>
                <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>{translate(card.description)}</Typography>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
