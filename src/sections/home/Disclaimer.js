import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography, LinearProgress } from '@mui/material';
// hooks

import useResponsive from '../../hooks/useResponsive';
import useLocales from '../../hooks/useLocales';
// components
import { MotionViewport, varFade } from '../../components/animate';
// assets
import DisclaimerImg from '../../assets/images/img-disclaimer.png';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
  },
}));

const SectionStyle = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: theme.spacing(2, 0, 2, 2),
    background: '#212B36',
    borderRadius: '8px',
    position: 'relative',
  }));

// ----------------------------------------------------------------------

export default function Disclaimer() {

  const { translate } = useLocales();

  const isDesktop = useResponsive('up', 'md');

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <m.div variants={varFade().inUp} style={{ textAlign: 'right' }}>
          <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
            {translate('home.disclaimer.title')}
          </Typography>
        </m.div>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }} style={{ position: 'relative' }}>
              <SectionStyle>
                <img src={DisclaimerImg} alt='Disclaimer' style={{width: '27rem',  }} />
            
              </SectionStyle>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <m.div variants={varFade().inRight} style={{ textAlign: 'right' }}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {translate('home.disclaimer.description1')} <br />
                <Typography component="span" variant="h2" sx={{ color: 'primary.main' }}>
                  {translate('home.disclaimer.description2')}&nbsp;
                </Typography>
              </Typography>
            </m.div>

            <m.div variants={varFade().inRight} style={{ textAlign: 'right' }}>
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                {translate('home.disclaimer.caption1')}
              </Typography>
              <br />
              <Typography
                sx={{
                  color: (theme) => (theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'),
                }}
              >
                {translate('home.disclaimer.caption2')}
              </Typography>
            </m.div>

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
