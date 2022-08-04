import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
// components
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const infoCards = [
  {
    title: '+15',
    description: 'PAMM Profitable Trading Systems ',
  },
  {
    title: '+24',
    description: 'Months with an APY greater than 8.5% monthly and an standard deviation of 3% ',
  },
  {
    title: '+30 K',
    description: 'Active subscribers to the PAMM strategies ',
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

export default function HomeMinimal() {
  const theme = useTheme();

  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box
          sx={{
            textAlign: 'center',
            mb: { xs: 10, md: 10 },
          }}
        >
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              SCOPE AND DATA
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2">Achieve your growth goals with</Typography>
          </m.div>
          <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
            NAME PLATFORM
          </Typography>
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
                <Typography sx={{ color: isLight ? 'text.secondary' : 'common.white' }}>{card.description}</Typography>
              </CardStyle>
            </m.div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
