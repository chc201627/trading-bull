import PropTypes from 'prop-types';
import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Grid, Card, Link, Stack, Button, Divider, Container, Typography } from '@mui/material';
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
          {_homePlans.map((plan) => (
            <Grid key={plan.license} item xs={12} md={4}>
              <m.div variants={plan.license === 'Standard Plus' ? varFade().inDown : varFade().inUp}>
                <PlanCard plan={plan} />
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
};

function PlanCard({ plan }) {
  const { license } = plan;
  const plus = license === 'Standard Plus';

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: 0,
        ...(plus && {
          boxShadow: (theme) => theme.customShadows.z24,
        }),
      }}
    >
      <Stack spacing={5}>
        <div>
          <Typography variant="overline" component="div" sx={{ mb: 2, color: 'text.disabled' }}>
            TRADING
          </Typography>
          <Typography variant="h4">{license}</Typography>
        </div>

        <Stack spacing={2.5}>

          <Divider sx={{ borderStyle: 'dashed' }} />

        </Stack>

        <Stack direction="row" justifyContent="flex-end">
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
        >
          Select a spot
        </Button>
      </Stack>
    </Card>
  );
}
