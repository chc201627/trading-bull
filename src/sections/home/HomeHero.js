import { m } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Iconify from '../../components/Iconify';
import { MotionContainer, varFade } from '../../components/animate';

import tronscanLogo from '../../assets/images/logos/tronscan.svg';
import usdtLogo from '../../assets/images/logos/usdt.svg';
import useLocales from '../../hooks/useLocales';
// ----------------------------------------------------------------------

const RootStyle = styled(m.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 600,
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left',
  },
}));

const HeroOverlayStyle = styled(m.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const HeroImgStyle = styled(m.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  [theme.breakpoints.up('lg')]: {
    right: '8%',
    width: 'auto',
    height: '48vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomeHero() {

  const { translate } = useLocales();
  return (
    <MotionContainer>
      <RootStyle>
        <HeroOverlayStyle alt="overlay" src="/assets/overlay.svg" variants={varFade().in} />

        <HeroImgStyle
          alt="hero"
          src="https://minimal-assets-api-dev.vercel.app/assets/images/home/hero.png"
          variants={varFade().inUp}
        />

        <Container>
          <ContentStyle>
            <m.div variants={varFade().inRight}>
              <Typography variant="h2" sx={{ color: 'common.white' }}>
                {translate('home.hero.content1')} <br />
                <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                {translate('home.hero.content2')}
                </Typography>
                <br /> {translate('home.hero.content3')} <br />
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight}>
              <Typography sx={{ color: 'common.white' }}>
                {translate('home.hero.description')}              </Typography>
            </m.div>           

            <Stack spacing={2.5}>
              <m.div variants={varFade().inRight}>
                <Typography variant="overline" sx={{ color: 'primary.light' }}>
                {translate('home.hero.powerBy')}
                </Typography>
              </m.div>

              <Stack direction="row" spacing={1.5} justifyContent={{ xs: 'center', md: 'flex-start' }}>
                {[tronscanLogo, usdtLogo].map((resource, i) => (
                  <m.img
                    key={i}
                    variants={varFade().inRight}
                    src={resource}
                  />
                ))}
              </Stack>              
            </Stack>
            <m.div variants={varFade().inRight}>
              <Button
                size="large"
                variant="contained"
                component={RouterLink}
                to={PATH_DASHBOARD.root}
                startIcon={<Iconify icon={'eva:flash-fill'} width={20} height={20} />}
              >
                {translate('home.hero.seeSpotsAvailable')}
              </Button>
            </m.div>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </MotionContainer>
  );
}
