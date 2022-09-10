import { useState } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Paper, Rating, Container, Typography, Stepper, Step, StepLabel } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';
import { fDate } from '../../utils/formatTime';
// components
import { MotionViewport, varFade } from '../../components/animate';

import useLocales from '../../hooks/useLocales';
// ----------------------------------------------------------------------


const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(10, 0),
  backgroundSize: 'cover',
  backgroundImage: `linear-gradient(to right, ${alpha(theme.palette.grey[900], 0.8)} , ${alpha(
    theme.palette.grey[900],
    0.8
  )}), url(https://minimal-assets-api-dev.vercel.app/assets/images/about/testimonials.jpg)`,
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    padding: 0,
    height: 840,
    overflow: 'hidden',
  },
}));

// ----------------------------------------------------------------------

export default function RefererProgram() {
  const { translate } = useLocales()
  const [step, setStep] = useState(0);

  const steps = translate('home.refererProgram.steps', {returnObjects: true});

  return (
    <RootStyle>
      <Container component={MotionViewport} sx={{ position: 'relative', height: 1 }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ height: 1 }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <m.div variants={varFade().inUp}>
                <Typography component="p" variant="overline" sx={{ mb: 2, color: 'text.secondary' }}>
                  {translate('home.refererProgram.title')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  {translate('home.refererProgram.content1')} <br />{translate('home.refererProgram.content2')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography sx={{ color: 'common.white', mb: 2 }}>
                  {translate('home.refererProgram.description')}
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography variant="caption" sx={{ color: 'grey.500' }}>
                  {translate('home.refererProgram.detail1')}
                  <br /><br />
                  {translate('home.refererProgram.detail2')}
                </Typography>
              </m.div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
          >
            <Grid container spacing={0} alignItems="center">
              <Grid item xs={12} md={12}>
                <Stepper activeStep={step} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step
                      onClick={() => setStep(index)}
                      key={index}
                      style={{cursor: 'pointer'}}
                    >
                      <StepLabel
                        style={{ maxWidth: 400 }}
                      >
                        <Typography variant="caption" sx={{ color: 'grey.500', fontSize: 24 }}>
                          {step.label}
                        </Typography>
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    content: PropTypes.string,
    dateCreate: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
  }),
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();

  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: 'common.white',
        ...cssStyles().bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>

      <Typography gutterBottom component="div" variant="caption" sx={{ color: 'grey.500' }}>
        {fDate(dateCreate)}
      </Typography>

      <Rating value={rating} readOnly size="small" />

      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}
