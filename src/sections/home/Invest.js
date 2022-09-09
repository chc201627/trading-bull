import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, LinearProgress } from '@mui/material';
// hooks

import useResponsive from '../../hooks/useResponsive';
import useLocales from '../../hooks/useLocales';
// _mock_
import { _skills } from '../../_mock';
// components
import { MotionViewport, varFade } from '../../components/animate';
// assets
import InvestImg1 from '../../assets/images/photos/img-invest-1.svg';
import InvestImg2 from '../../assets/images/photos/img-invest-2.svg';

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

  const { translate } = useLocales();

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
              <Box display='flex' justifyContent='space-between' alignItems='center' width={'100%'} height={'100%'}>
                <img src={InvestImg1} alt='Invest 1' style={{width: '18rem'}} />
                <img src={InvestImg2} alt='Invest 2' style={{width: '18rem', marginTop: '6rem'}}/>
              </Box>
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
                  <ProgressItem progress={{ label: translate(`home.invest.skill${i}`), value: 70 }} />
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
        <Typography variant="subtitle2">{label}&nbsp;</Typography>
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
