import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
// _mock_
import { _homePlans } from '../../_mock';
// components
import Iconify from '../../components/Iconify';
import { varFade, MotionViewport } from '../../components/animate';
import useLocales from '../../hooks/useLocales';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function Spots() {

  const { translate, currentLang } = useLocales();

  const mockOption = {
    name: "TRADING GOLD S&P 500",
    goal: 10000,
    lacking_amount: 4000,
    inversation_rate: '$1,000-3,000',
    rentability: 13.5,
    total_investors: 23,
    deposits_buy: 6000,
    next_activation: '30/08/2022'
  }

  const isEng = currentLang.value === 'en'


  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <m.div variants={varFade().inUp}>
            <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
              {translate('home.spots.title')}
            </Typography>
          </m.div>
          <m.div variants={varFade().inDown}>
            <Typography variant="h2" sx={{ mb: 3 }} component="div">
              <Typography variant="h2" component="span" sx={isEng && { color: 'primary.main' }}>
                {isEng ? translate('home.spots.invest') : translate('home.spots.options')}
              </Typography>
              &nbsp;
              <Typography variant="h2" component="span" sx={!isEng && { color: 'primary.main' }}>
                {isEng ? translate('home.spots.options') : translate('home.spots.invest')}
              </Typography>
            </Typography>
          </m.div>
        </Box>
        <m.div variants={varFade().inUp}>
          <TradingSpotCard option={mockOption} />
        </m.div>
      </Container>
    </RootStyle>
  );
}
//-----------------------------------------------------------------------
TradingSpotCard.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string,
    goal: PropTypes.number,
    lacking_amount: PropTypes.number,
    inversation_rate: PropTypes.string,
    rentability: PropTypes.number,
    total_investors: PropTypes.number,
    deposits_buy: PropTypes.number,
    next_activation: PropTypes.string
  })
}

function TradingSpotCard({ option }) {

  const { translate } = useLocales();

  const progress = ((option.goal - option.lacking_amount) * 100) / option.goal

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: 0,
        backgroundImage: 'linear-gradient(0deg, rgba(33, 43, 54, 1), rgba(33, 43, 54, 0.75)), url(https://minimal-assets-api-dev.vercel.app/assets/images/about/testimonials.jpg);',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
        {translate('home.spots.title')}
      </Typography>
      <Typography variant="h4">
        {option.name}
      </Typography>
      <Box display='flex' justifyContent="space-between" mt={3}>
        <Typography variant="subtitle1" >
          {translate('home.spots.tradingSpot.goal')}
        </Typography>
        <Typography variant="subtitle1" >
          {`$${option.goal.toLocaleString('en-US')}`}
        </Typography>
      </Box>
      <Grid
        container
        alignItems="center"
        mt={3}
        mb={2}
      >
        <Grid item sm={11} >
          <LinearProgress
            value={progress}
            variant='determinate'
            sx={{
              height: 13,
              [`&.${linearProgressClasses.colorPrimary}`]: {
                backgroundColor: 'primary.lighter'
              }
            }} />
        </Grid>
        <Grid
          item
          container
          sm={1}
          justifyContent="flex-end"
          alignItems="center">
          <Typography variant="caption"
            sx={{
              color: 'text.disabled'
            }}>
            {`${progress}%`}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={6}  >
          <Box display="flex" justifyContent="flex-start" alignItems='center' mb={1}>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }} >
              {`${translate('home.spots.tradingSpot.lacking_amount')}:`}
            </Typography>
            <Typography variant="h5" sx={{ ml: 2, mr: 1 }} >
              {`$${option.lacking_amount.toLocaleString('en-US')}`}
            </Typography>
            <Iconify icon={'eva:inbox-fill'} width={20} height={20} />
          </Box>

          <Box display="flex" justifyContent="flex-start" alignItems='center' mb={1}>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              {`${translate('home.spots.tradingSpot.inversation_rate')}:`}
            </Typography>
            <Typography variant="h5" sx={{ ml: 2, mr: 1 }} >
              {option.inversation_rate}
            </Typography>
            <Iconify icon={'bx:calendar-alt'} width={20} height={20} />
          </Box>

          <Box display="flex" justifyContent="flex-start" alignItems='center' mb={1}>
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              {translate('home.spots.tradingSpot.rentability')}
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 2, mr: 1 }} >
              {`${option.rentability}%`}
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={6} spacing={2}  >
          <Box display="flex" justifyContent="flex-end" alignItems='center' mb={1} >
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }} >
              {translate('home.spots.tradingSpot.total_investors')}
            </Typography>
            <Typography variant="h5" sx={{ ml: 2, mr: 1 }} >
              {option.total_investors}
            </Typography>
            <Iconify icon="bi:file-person-fill" width={20} height={20} />
          </Box>

          <Box display="flex" justifyContent="flex-end" alignItems='center' mb={1} >
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }} >
              {translate('home.spots.tradingSpot.deposits_buy')}
            </Typography>
            <Typography variant="h5" sx={{ ml: 2, mr: 1 }} >
              {`$${option.deposits_buy.toLocaleString('en-US')}`}
            </Typography>
            <Iconify icon={'bx:calendar-alt'} width={20} height={20} />
          </Box>

          <Box display="flex" justifyContent="flex-end" alignItems='center' mb={1} >
            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }} >
              {`${translate('home.spots.tradingSpot.next_activation')}:`}
            </Typography>
            <Typography variant="subtitle2" sx={{ ml: 2, mr: 1 }} >
              {option.next_activation}
            </Typography>
          </Box>

        </Grid>
      </Grid>
      <Box display="flex" justifyContent="flex-end" alignItems="center" mt={1} mb={2}>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }} >
          {translate('home.spots.tradingSpot.learn_more')}
        </Typography>
        <Iconify icon='akar-icons:chevron-right' width={15} height={15} sx={{ ml: 2, color: 'text.disabled' }} />
      </Box>
      <Button
          size="large"
          fullWidth
          variant="contained"
          target="_blank"
          rel="noopener"
          href="#"
          endIcon={<Iconify icon="ic:outline-add-shopping-cart" width={20} height={20}/>}
        >
          Invest
        </Button>
    </Card >
  )
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
