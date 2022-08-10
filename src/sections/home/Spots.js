import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography, LinearProgress } from '@mui/material';
// _mock_
import { _homePlans } from '../../_mock';
// components
import Iconify from '../../components/Iconify';
import { varFade, MotionViewport } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Spots() {

  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              Spots
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Spots for Invest
            </Typography>
          </m.div>
        </Box>
        <Grid container spacing={5}>
          {_homePlans.map((plan, i) => (
            <Grid key={plan.license} item xs={12} md={4}>
              <m.div variants={plan.license === 'Standard Plus' ? varFade().inDown : varFade().inUp}>
                <PlanCard plan={plan} last={_homePlans.length - 1 === i} />
              </m.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

PlanCard.propTypes = {
  plan: PropTypes.shape({
    license: PropTypes.string,
    commons: PropTypes.arrayOf(PropTypes.string),
    icons: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.string),
  }),
  last: PropTypes.bool,
};

function PlanCard({ plan, last }) {
  const { license } = plan;
  const plus = license === 'Standard Plus';

  const [remainingTime, setRemainingTime] = useState([]);

  const getRemainingTime = (timestamp) => {
    const now = new Date();
    const diff = new Date(timestamp) - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return [{ label: 'days', value: days }, { label: 'hours', value: hours }, { label: 'minutes', value: minutes }, { label: 'seconds', value: seconds }];
  }

  // Get remaining time every second


  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(1691542695000));
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);


  return (
    <Card
      sx={{
        p: 5,
        boxShadow: 0,
        ...(plus && {
          boxShadow: (theme) => theme.customShadows.z24,
        }),
        backgroundImage: 'linear-gradient(0deg, rgba(33, 43, 54, 1), rgba(33, 43, 54, 0.75)), url(https://minimal-assets-api-dev.vercel.app/assets/images/about/testimonials.jpg);',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Stack spacing={5}>
        <div>
          <Typography variant="overline" component="div" sx={{ mb: 2, color: 'text.disabled' }}>
            TRADING
          </Typography>
          <Typography variant="h4">
            {license}
            {
              last && <Typography component='span' sx={{ ml: 1, color: 'green' }}>Open</Typography>
            }
          </Typography>
        </div>
        {
          last ?
            <div>
              <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Typography component='span' sx={{ color: 'text.disabled' }}>Spots Remaining :</Typography>
                <Typography variant="h4">
                  245
                  <Typography component='span' sx={{ ml: 3 }}>
                    / 1000
                  </Typography>
                </Typography>

              </Box>
              <LinearProgress value={80} variant='determinate' sx={{ mt: 3 }} />
            </div>
            :
            <div>
              <Typography component="small" sx={{ fontSize: 'small' }} >
                Starts in
              </Typography>
              <Box display='flex' justifyContent='space-between'>
                {remainingTime.map((time, index) => (
                  <>
                    <Box key={index} display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                      <Typography variant="h4">{time.value}</Typography>
                      <Typography component="small" sx={{ color: 'text.disabled', fontSize: 'small' }}>{time.label}</Typography>
                    </Box>
                    {index !== remainingTime.length - 1 && <Typography variant="h4">:</Typography>}
                  </>
                ))}
              </Box>
            </div>
        }

        <Stack spacing={2.5}>
          <Divider sx={{ borderStyle: 'dashed' }} />
          <Typography component="span" sx={{ mb: 2, color: 'text.disabled' }}>
            Rentability:
            <Typography component="span" sx={{ color: 'white' }}>
              &nbsp;13.5%
            </Typography>

          </Typography>
          <Typography component="span" sx={{ mb: 2, color: 'text.disabled' }}>
            Inversition Rate:
            <Typography component="span" sx={{ color: 'white' }} >
              &nbsp;$1k - $3,5k
            </Typography>
          </Typography>

        </Stack>

        <Stack direction="row" justifyContent={last ? "space-between" : "flex-end"}>
          {
            last &&
            <Box display='flex' flexDirection='column'>
              <Typography component="span" sx={{ color: 'text.disabled' }}>
              Time Remaining
              </Typography>
              <Typography component="span" sx={{ color: 'white' }}>
                12 Days
              </Typography>
            </Box>
          }
          <Link
            color="text.secondary"
            underline="always"
            target="_blank"
            rel="noopener"
            href="https://material-ui.com/store/license/#i-standard-license"
            sx={{ typography: 'body2', display: 'flex', alignItems: 'center' }}
          >
            Learn more <Iconify icon={'eva:chevron-right-fill'} width={20} height={20} />
          </Link>
        </Stack>

        <Button
          size="large"
          fullWidth
          variant="contained"
          target="_blank"
          rel="noopener"
          href="https://material-ui.com/store/items/minimal-dashboard/"
          disabled={!last}
        >
          Select a spot
        </Button>
      </Stack>
    </Card>
  );
}
