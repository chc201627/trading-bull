import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, LinearProgress, Card } from '@mui/material';
// hooks
import Slider from 'react-slick';
import useResponsive from '../../hooks/useResponsive';
import useLocales from '../../hooks/useLocales';
// utils
import { fPercent } from '../../utils/formatNumber';
// _mock_
import { _skills } from '../../_mock';
// components
import { MotionViewport, varFade } from '../../components/animate';
import { CarouselDots } from '../../components/carousel';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

// ----------------------------------------------------------------------

export default function Invest() {
  const theme = useTheme();

  const { translate } = useLocales();

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    ...CarouselDots({ position: 'absolute', right: 16, bottom: 16 }),
  };

  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp} style={{ textAlign: 'right' }}>
          <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
            {translate('home.invest.title')}
          </Typography>
        </m.div>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }} style={{ position: 'relative' }}>
              <Slider {...settings}>
                {['', '', ''].map((card, i) => (
                  <Card
                    key={i}>
                    <div style={{ height: '40vh' }}>
                      Slide
                    </div>
                    Prueba
                    <br />
                  </Card>
                ))}
              </Slider>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight} style={{ textAlign: 'right' }}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {translate('home.invest.description1')} <br />
                <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                  {translate('home.invest.description2')}&nbsp;
                </Typography>
                {translate('home.invest.description3')}
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ textAlign: 'right' }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                {translate('home.invest.caption')}
              </Typography>
            </m.div>


            <Box sx={{ my: 5 }}>
              {_skills.map((progress, i) => (
                <m.div key={progress.label} variants={varFade().inRight}>
                  <ProgressItem progress={{ label: translate(`home.invest.skill${i}`), value: 0 }} />
                </m.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
          '&.MuiLinearProgress-determinate': { bgcolor: 'divider' },
        }}
      />
    </Box>
  );
}
